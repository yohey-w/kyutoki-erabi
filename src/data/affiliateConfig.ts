export interface AffiliateProgram {
  name: string;
  network: 'A8';
  rewardYen: number;
  status: 'active' | 'pending' | 'url_pending';
  affiliateUrl: string;
}

export interface AffiliatePlacement {
  title: string;
  description: string;
  buttonText: string;
  affiliateUrl: string;
  note: string;
}

const PR_NOTE = '※PR: 本記事にはアフィリエイト広告が含まれます';

export const affiliatePrograms = {
  kyutto: {
    name: 'きゅっと',
    network: 'A8',
    rewardYen: 5500,
    status: 'pending',
    affiliateUrl: 'https://example.com/affiliate/placeholder-kyutoki-1',
  },
} as const satisfies Record<string, AffiliateProgram>;

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
} as const satisfies Record<'top' | 'middle' | 'bottom', AffiliatePlacement>;
