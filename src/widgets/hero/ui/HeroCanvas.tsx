import { useRef, useEffect } from 'react'
import * as THREE from 'three'

/**
 * Three.jsを直接使用した軽量なFV背景キャンバス
 * React Three Fiberを使わずに、よりコントロールしやすい実装
 */
export const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // レンダラー設定
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setClearColor(0x000000, 0)

    // シーン・カメラ
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 8)

    // ライティング
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const dirLight = new THREE.DirectionalLight(0x6699ff, 1.2)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0xa78bfa, 0.8, 20)
    pointLight.position.set(-3, 2, 4)
    scene.add(pointLight)

    // ==============
    // パーティクルシステム
    // ==============
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 600 : 1400

    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    const colorPalette = [
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0x8b5cf6), // violet
      new THREE.Color(0x6366f1), // indigo
      new THREE.Color(0x0ea5e9), // sky
      new THREE.Color(0xa78bfa), // purple
      new THREE.Color(0xc4b5fd), // light purple
    ]

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // 球状分布 + ランダムオフセット
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 3 + Math.random() * 6

      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      positions[i3 + 2] = r * Math.cos(phi) - 2

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i3] = col.r
      colors[i3 + 1] = col.g
      colors[i3 + 2] = col.b

      sizes[i] = Math.random() * 2.5 + 0.5
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    // ==============
    // フローティングワイヤーフレームリング
    // ==============
    const ringGroup = new THREE.Group()
    scene.add(ringGroup)

    const ringConfigs = [
      { radius: 2.8, tube: 0.008, color: 0x6366f1, opacity: 0.25, tilt: 0.3 },
      { radius: 4.2, tube: 0.006, color: 0x8b5cf6, opacity: 0.18, tilt: -0.5 },
      { radius: 1.6, tube: 0.01, color: 0x3b82f6, opacity: 0.3, tilt: 0.8 },
    ]

    const rings: THREE.Mesh[] = []
    ringConfigs.forEach(({ radius, tube, color, opacity, tilt }) => {
      const torusGeo = new THREE.TorusGeometry(radius, tube, 8, 80)
      const torusMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        wireframe: false,
      })
      const torus = new THREE.Mesh(torusGeo, torusMat)
      torus.rotation.x = tilt
      torus.rotation.z = tilt * 0.5
      rings.push(torus)
      ringGroup.add(torus)
    })

    // ==============
    // グラスモーフィズムのカード風オブジェクト
    // ==============
    const cardGroup = new THREE.Group()
    scene.add(cardGroup)

    const cardData = [
      { x: -2.5, y: 1.2, z: -1, rx: 0.1, ry: 0.3, rz: 0.05, color: 0x3b82f6 },
      { x: 2.8, y: -0.8, z: -2, rx: -0.15, ry: -0.4, rz: 0.08, color: 0x8b5cf6 },
      { x: -1.5, y: -2, z: -1.5, rx: 0.2, ry: 0.2, rz: -0.1, color: 0x6366f1 },
      { x: 3.2, y: 1.8, z: -3, rx: -0.1, ry: -0.2, rz: 0.15, color: 0x0ea5e9 },
    ]

    const cards: THREE.Mesh[] = []
    cardData.forEach(({ x, y, z, rx, ry, rz, color }) => {
      const geo = new THREE.PlaneGeometry(1.4, 0.9, 1, 1)
      const mat = new THREE.MeshPhongMaterial({
        color,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
        shininess: 100,
      })
      const card = new THREE.Mesh(geo, mat)
      card.position.set(x, y, z)
      card.rotation.set(rx, ry, rz)

      // カードの枠線
      const edges = new THREE.EdgesGeometry(geo)
      const lineMat = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
      })
      const wireframe = new THREE.LineSegments(edges, lineMat)
      card.add(wireframe)

      cards.push(card)
      cardGroup.add(card)
    })

    // マウス追跡
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // リサイズ
    const handleResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // アニメーション
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // パーティクル回転
      particles.rotation.y = t * 0.04
      particles.rotation.x = Math.sin(t * 0.02) * 0.05

      // リング回転
      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.08 + i * 0.03) * (i % 2 === 0 ? 1 : -1)
        ring.rotation.x = Math.sin(t * 0.15 + i) * 0.1 + ringConfigs[i].tilt
      })

      // カードフロート
      cards.forEach((card, i) => {
        card.position.y = cardData[i].y + Math.sin(t * 0.5 + i * 1.2) * 0.15
        card.rotation.y = cardData[i].ry + Math.sin(t * 0.3 + i) * 0.05
      })

      // マウス視差
      ringGroup.rotation.x += (mouse.y * 0.15 - ringGroup.rotation.x) * 0.04
      ringGroup.rotation.y += (mouse.x * 0.15 - ringGroup.rotation.y) * 0.04
      cardGroup.rotation.x += (mouse.y * 0.08 - cardGroup.rotation.x) * 0.03
      cardGroup.rotation.y += (mouse.x * 0.08 - cardGroup.rotation.y) * 0.03

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
