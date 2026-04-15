# Portfolio Site - セットアップガイド

## 起動手順

```bash
# 1. 依存パッケージのインストール
npm install

# 2. 開発サーバーの起動
npm run dev

# 3. ビルド
npm run build

# 4. プレビュー
npm run preview
```

## プロフィール画像の差し替え

`public/profile.jpg` に画像ファイルを配置してください。

## 作品データの追加

`src/shared/config/works.ts` の `works` 配列に要素を追加するだけで、
トップページ・一覧・詳細・関連作品すべてに自動反映されます。

```ts
{
  id: '11',
  title: '新しい作品名',
  slug: 'new-work-slug',
  category: 'カテゴリ',
  tone: 'テイスト',
  url: 'https://example.com',
  summary: '概要テキスト',
  description: '詳細説明',
  concept: 'デザインコンセプト',
  techStack: ['React', 'TypeScript'],
  highlights: ['工夫した点1', '工夫した点2'],
  isFeatured: true,  // トップページの代表作品に含める場合
  relatedSlugs: ['flowpilot'],  // 関連作品のスラッグ
  publishedAt: '2024-12',
}
```

## サムネイル画像の追加

`public/thumbnails/[slug].jpg` に画像を配置し、works.ts の `thumbnail` フィールドに
`/thumbnails/flowpilot.jpg` のように設定してください。

サムネイルが未設定の場合はグラデーション+タイトルのプレースホルダーが自動表示されます。

## SNSリンクの変更

`src/shared/config/socialLinks.ts` を編集してください。

## プロフィール情報の変更

`src/shared/config/profile.ts` を編集してください。

## ディレクトリ構成 (FSD)

```
src/
  app/          # アプリケーション初期化・ルーター・グローバルスタイル
  pages/        # 各ページコンポーネント
  widgets/      # ページを構成する複合UIブロック
  features/     # 機能単位のロジック（将来の拡張用）
  entities/     # ドメインオブジェクトのUI・モデル
  shared/       # 汎用ユーティリティ・UIコンポーネント・設定
```
