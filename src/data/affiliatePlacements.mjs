/**
 * Affiliate placement configuration (ESM)
 *
 * Single source of truth for CTA content across all articles.
 * Used by rehype-affiliate-cta plugin in astro.config.mjs.
 * Update URLs and copy here when affiliate programs change.
 */

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  kyutto: {
    name: 'きゅっと エコキュート修理',
    network: 'A8',
    rewardYen: 5500,
    status: 'active',
    affiliateUrl: 'https://px.a8.net/svt/ejp?a8mat=4AX9GA+7R8BHU+3EMG+5GH9CI',
  },
};

export const affiliatePlacements = {
  top: {
    title: '給湯器交換の無料見積もりをすぐ確認',
    description:
      'きゅっとは見積もり相談から日程調整まで一括で進められます。まずは現状の症状と希望工事日を入力して費用目安を確認しましょう。',
    buttonText: 'きゅっとの無料見積もりを確認する →',
    affiliateUrl: affiliatePrograms.kyutto.affiliateUrl,
    note: PR_NOTE,
  },
  middle: {
    title: '相場を見てから依頼先を比較したい方へ',
    description:
      'きゅっとは給湯器交換の相談窓口として使いやすく、複数条件を整理しながら比較検討できます。現地状況を伝えて概算を確認しましょう。',
    buttonText: 'きゅっとの見積もり条件を見る →',
    affiliateUrl: affiliatePrograms.kyutto.affiliateUrl,
    note: PR_NOTE,
  },
  bottom: {
    title: '最後に費用条件と対応可否を再確認',
    description:
      'A8の審査中リンクのため、提携確定後に正式URLへ差し替え予定です。依頼前の候補として情報を確認しておきましょう。',
    buttonText: 'きゅっとの最新情報を確認する →',
    affiliateUrl: affiliatePrograms.kyutto.affiliateUrl,
    note: PR_NOTE,
  },
};
