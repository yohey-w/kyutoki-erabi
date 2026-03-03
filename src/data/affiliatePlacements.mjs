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
  zehitomo: {
    name: 'ゼヒトモ',
    network: 'A8',
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+53DP9U+5LK4+5YJRM',
  },
  oyuDenai: {
    name: 'お湯出ない.com',
    network: 'A8',
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AXA8I+3X3VS2+3EMG+5MFT42',
  },
};

export const affiliatePlacements = {
  top: {
    title: '給湯器のトラブル、すぐに相談できます',
    description:
      'お湯出ない.comは給湯器の故障・交換に即対応。まずは症状を伝えて費用目安を確認しましょう。',
    buttonText: 'お湯出ない.comに無料相談する →',
    affiliateUrl: affiliatePrograms.oyuDenai.affiliateUrl,
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
    title: '給湯器・リフォームの見積もりを比較',
    description:
      'ゼヒトモは国内最大級の見積もりサイト。給湯器交換からリフォームまで、複数業者の条件をまとめて比較できます。',
    buttonText: 'ゼヒトモで無料見積もりを比較する →',
    affiliateUrl: affiliatePrograms.zehitomo.affiliateUrl,
    note: PR_NOTE,
  },
};
