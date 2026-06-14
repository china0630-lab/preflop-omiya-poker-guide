window.PREFLOP_ARTICLES = [
  {
    id: "poker-essence-range-equity",
    title: "ポーカーの本質：レンジ表とエクイティで見る勝ち筋",
    subtitle: "プリフロップ表は暗記表ではなく、強いハンドが後ろに残る確率を管理する地図。",
    author: "ユウジ",
    category: "本質解説",
    date: "2026-06-13",
    readTime: "8分",
    memberOnly: true,
    featured: true,
    tags: ["プリフロップ", "レンジ", "エクイティ"],
    images: {
      overview: "./assets/poker-essence-source.jpg",
      part1: "./assets/poker-essence-part-1.jpg",
      part2: "./assets/poker-essence-part-2.jpg"
    },
    summary: [
      "AAが配られる確率は約220分の1。",
      "自分の手だけではなく、後ろに強いハンドが残る確率を見る。",
      "ポーカーはチップではなく、エクイティを奪い合うゲーム。"
    ],
    body: [
      {
        type: "heading",
        text: "ポーカーの本質①：なぜプリフロップ表が存在するのか"
      },
      {
        type: "paragraph",
        text: "まず、エーシーズ（AA）が配られる確率は、約220分の1（0.45%）です。これだけ聞くと、エーシーズなんて滅多に来ない最強ハンドと思うかもしれません。"
      },
      {
        type: "paragraph",
        text: "でも、ポーカーは自分だけのゲームではありません。あなたがUTGでキングス（KK）を持っていたとしても、後ろにたくさんのプレイヤーが残っているなら、誰かがAAを持っている可能性を考える必要があります。"
      },
      {
        type: "callout",
        text: "レンジ表とは「後ろにもっと強いハンドがいる確率」を管理するための地図です。単なる暗記表ではありません。"
      },
      {
        type: "image-pair",
        title: "元図解を2つの章で読む",
        items: [
          {
            title: "① プリフロップ表の本質：確率の縮小",
            src: "./assets/poker-essence-part-1.jpg",
            alt: "プリフロップ表の本質を説明した図解"
          },
          {
            title: "② ポーカーの本質：エクイティを奪い、取り切る",
            src: "./assets/poker-essence-part-2.jpg",
            alt: "エクイティを奪うゲームを説明した図解"
          }
        ]
      },
      {
        type: "heading",
        text: "ポーカーの本質②：ポーカーはエクイティを奪い合うゲーム"
      },
      {
        type: "paragraph",
        text: "ポーカーは、正確にはエクイティ（ポットを獲得する権利）を奪い合うゲームです。AA vs 56sなら、プリフロップではAAが約81%、56sが約19%の勝率を持っています。"
      },
      {
        type: "equity",
        streets: [
          ["Preflop", "AA 81%", "56s 19%"],
          ["Flop", "AA 92%", "56s 8%"],
          ["Turn", "AA 97%", "56s 3%"],
          ["River", "AA 100%", "56s 0%"]
        ]
      },
      {
        type: "paragraph",
        text: "56sは負けています。でも、19%のポットの権利は持っています。AA側がフロップ、ターン、リバーまでプレッシャーをかけて相手をフォールドさせたなら、その19%の権利は消えます。"
      },
      {
        type: "heading",
        text: "だから、強い時は取り切る"
      },
      {
        type: "paragraph",
        text: "勝っている時はバリューベットを打つ。相手のチップを奪うというより、自分が持っているエクイティを現実のチップに変換するという感覚です。"
      },
      {
        type: "callout",
        text: "プリフロップ表は確率の地図。ポストフロップのベットはエクイティ操作。この二つを理解すると、ポーカーは不完全情報下で期待値を最大化するゲームだと見えてきます。"
      }
    ]
  },
  {
    id: "btn-open-range",
    title: "BTNで参加レンジが広がる理由",
    subtitle: "後ろに残る人数が少ないほど、強いハンドにぶつかる確率は下がる。",
    author: "ユウジ",
    category: "プリフロップ",
    date: "2026-06-20",
    readTime: "5分",
    memberOnly: true,
    featured: false,
    tags: ["BTN", "ポジション", "レンジ"],
    summary: ["BTNは後ろがSB/BBだけ。", "広げてよい理由は運ではなく確率。", "広げすぎるとBBのディフェンスに負ける。"],
    body: [
      { "type": "heading", "text": "次回記事の下書き枠" },
      { "type": "paragraph", "text": "ここにユウジさんの次回記事本文を入れます。content/articles.js に1オブジェクト追加するだけで、記事一覧と詳細ページへ反映されます。" }
    ]
  }
];
