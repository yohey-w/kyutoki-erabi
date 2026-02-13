/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  kyutoukiPanda: {
    name: '給湯パンダ',
    network: 'A8',
    rewardYen: 0,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+4IJHK2+50EG+HVFKY',
  },
  kyutto: {
    name: 'きゅっと エコキュート修理',
    network: 'A8',
    rewardYen: 5500,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+7R8G4I+3EMG+5GIBXD',
  },
};

export const affiliatePlacements = {
  top: {
    title: '給湯器トラブルの無料見積もりをすぐ確認',
    description:
      '給湯パンダはすぐお湯を出す給湯器トラブル対応サービス。まずは現状の症状を伝えて費用目安を確認しましょう。',
    buttonText: '給湯パンダに無料見積もりを依頼する →',
    affiliateUrl: affiliatePrograms.kyutoukiPanda.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: 'エコキュート修理の相場を確認したい方へ',
    description:
      'きゅっとは最短即日対応のエコキュート修理サービス。複数条件を整理しながら比較検討できます。',
    buttonText: 'きゅっとの見積もり条件を見る →',
    affiliateUrl: affiliatePrograms.kyutto.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に費用条件と対応可否を再確認',
    description:
      '工事内容・保証・対応スピードの条件を比較したうえで依頼先を決めると安心です。',
    buttonText: '給湯パンダの最新情報を確認する →',
    affiliateUrl: affiliatePrograms.kyutoukiPanda.affiliateUrl,
    note: PR_NOTE,
  },
};
