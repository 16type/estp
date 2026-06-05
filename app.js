const estpCards = [
  {
    name: "突破型ESTP",
    catch: "考えるより先に、もう現場にいる。",
    summary: "失敗してもその場で直す。止まるより進むタイプ。",
    feature: "とにかく初速が速い。状況を見ながら動くのが得意で、細かい準備より実際に触って理解する。",
    strong: "行動力、対応力、トラブルへの強さ。誰も動けない場面で先に動ける。",
    weak: "説明を最後まで聞く前に動きがち。雑に見られることもある。",
    manual: "止めるより、任せた方が伸びます。ただし危なそうな時だけ短く止めてください。",
    image: "images/estp-01.png"
  },
  {
    name: "兄貴型ESTP",
    catch: "口は雑。でも面倒見はいい。",
    summary: "困ってる人を見たら、なんだかんだ放っておけない。",
    feature: "頼られると強い。優しい言葉は少ないけど、行動で助けるタイプ。",
    strong: "現実的なサポート、判断の速さ、場を安心させる力。",
    weak: "優しさが不器用。言い方が荒くて誤解されることがある。",
    manual: "ありがとうを重く言われると照れます。軽く頼った方が動きます。",
    image: "images/estp-02.png"
  },
  {
    name: "煽り型ESTP",
    catch: "からかってるようで、実は一番見てるやつ。",
    summary: "相手の反応を見ながら、空気を動かすタイプ。",
    feature: "冗談やツッコミで場を崩す。相手の強がりや違和感に気づきやすい。",
    strong: "緊張を壊す、本音を引き出す、場を軽くする。",
    weak: "冗談が刺さることがある。優しさが伝わりにくい。",
    manual: "本気で嫌がってるなら止まります。でも強がってるだけなら多分バレます。",
    image: "images/estp-03.png"
  },
  {
    name: "陽キャ型ESTP",
    catch: "いるだけで、場の温度が上がる。",
    summary: "ノリと勢いで空気を変えるタイプ。",
    feature: "人との距離を詰めるのが早い。楽しい空気を作るのがうまい。",
    strong: "盛り上げ力、巻き込み力、初対面への強さ。",
    weak: "静かにしたい人にはうるさく見える。テンションで押し切りがち。",
    manual: "楽しい場所に置いてください。退屈が続くと急に雑になります。",
    image: "images/estp-04.png"
  },
  {
    name: "職人型ESTP",
    catch: "語るより、結果で黙らせる。",
    summary: "技術と実力で勝負する現場型。",
    feature: "手を動かして覚えるタイプ。理屈より実感を重視する。",
    strong: "実践力、再現力、身体感覚、道具の扱い。",
    weak: "長い説明や机上の空論に弱い。言語化が雑になりやすい。",
    manual: "説明より見本を渡してください。触らせた方が早いです。",
    image: "images/estp-05.png"
  },
  {
    name: "ギャンブラー型ESTP",
    catch: "安全策より、勝てる匂いがする方へ。",
    summary: "勝負勘で動く。リスクがあるほど燃えるタイプ。",
    feature: "チャンスを見つけるのが早い。流れを読んで一気に動く。",
    strong: "勝負強さ、度胸、判断速度、場の流れを掴む力。",
    weak: "安定を軽く見がち。調子に乗ると突っ込みすぎる。",
    manual: "全部止めると反発します。勝ち筋とリスクを短く見せると聞きます。",
    image: "images/estp-06.png"
  },
  {
    name: "現場指揮官型ESTP",
    catch: "混乱した瞬間、急に頼れる。",
    summary: "トラブル時に本領発揮するタイプ。",
    feature: "普段は軽そうでも、いざという時に判断が速い。周りを動かすのも得意。",
    strong: "危機対応、指示出し、現場整理、決断力。",
    weak: "平和な時は退屈そう。細かい事務作業は後回しにしがち。",
    manual: "緊急時は任せてください。平常時は細かく縛りすぎないでください。",
    image: "images/estp-07.png"
  },
  {
    name: "自由人型ESTP",
    catch: "縛られると死ぬ。自由だと強い。",
    summary: "好きな場所で本領発揮するタイプ。",
    feature: "決められすぎると動きが鈍る。自由度が高いほど面白いことをする。",
    strong: "発想の柔軟さ、行動範囲の広さ、環境適応力。",
    weak: "ルールが多い場所では反発しやすい。飽きると消える。",
    manual: "最低限の目的だけ渡してください。やり方は任せた方が強いです。",
    image: "images/estp-08.png"
  },
  {
    name: "無自覚モテ型ESTP",
    catch: "距離感が近い。なのに本人は普通のつもり。",
    summary: "ナチュラルに人を勘違いさせるタイプ。",
    feature: "軽く話してるだけなのに、距離が近く見える。自然体の魅力が強い。",
    strong: "親しみやすさ、反応の良さ、相手を退屈させない力。",
    weak: "無自覚に期待させる。恋愛トラブルを呼びやすい。",
    manual: "本人は本当に何も考えてないことがあります。期待しすぎ注意です。",
    image: "images/estp-09.png"
  },
  {
    name: "戦闘狂ESTP",
    catch: "面倒ごとほど、なぜか目が輝く。",
    summary: "揉め事、勝負、難所でテンションが上がるタイプ。",
    feature: "簡単すぎると飽きる。相手が強いほど燃える。",
    strong: "胆力、突破力、負けず嫌い、対人戦の強さ。",
    weak: "平穏が続くと刺激を探しがち。言い返しすぎることがある。",
    manual: "正面から押さえると余計に燃えます。勝負の形を変えると扱いやすいです。",
    image: "images/estp-10.png"
  },
  {
    name: "ノリ職人ESTP",
    catch: "その場の流れを作る天才。",
    summary: "空気を読んで、あえて崩すタイプ。",
    feature: "場のテンポを掴むのがうまい。笑い、ツッコミ、流れ作りに強い。",
    strong: "即興力、ユーモア、コミュ力、空気の操作。",
    weak: "真面目な場面でも茶化しそうに見える。本音が見えにくい。",
    manual: "ふざけていても全部が適当とは限りません。急に核心を突きます。",
    image: "images/estp-11.png"
  },
  {
    name: "静かな猛獣型ESTP",
    catch: "普段は静か。動く時だけ速い。",
    summary: "騒がしくないけど、実はかなり実戦型。",
    feature: "無駄に喋らない。観察して、必要な時だけ一気に動く。",
    strong: "観察力、判断力、瞬発力、静かな圧。",
    weak: "何を考えているか分かりにくい。冷たく見られることがある。",
    manual: "喋らないから何も考えてないわけではありません。むしろ見ています。",
    image: "images/estp-12.png"
  }
];

const cardList = document.getElementById("cardList");
const modalImage = document.getElementById("modalImage");

const modal = document.getElementById("modal");
const modalBg = document.getElementById("modalBg");
const closeModal = document.getElementById("closeModal");

const modalTag = document.getElementById("modalTag");
const modalName = document.getElementById("modalName");
const modalCatch = document.getElementById("modalCatch");
const modalFeature = document.getElementById("modalFeature");
const modalStrong = document.getElementById("modalStrong");
const modalWeak = document.getElementById("modalWeak");
const modalManual = document.getElementById("modalManual");
const shareBtn = document.getElementById("shareBtn");

function renderCards() {
  cardList.innerHTML = "";

  estpCards.forEach((card, index) => {
    const cardEl = document.createElement("button");
    cardEl.className = "card";
    cardEl.type = "button";

    cardEl.innerHTML = `
      <p class="card-number">NO.${String(index + 1).padStart(2, "0")}</p>
      <h3>${card.name}</h3>
      <p>${card.summary}</p>
    `;

    cardEl.addEventListener("click", () => openDetail(card, index));
    cardList.appendChild(cardEl);
  });
}

function openDetail(card, index) {
  modalTag.textContent = `ESTP ZUKAN / NO.${String(index + 1).padStart(2, "0")}`;
  modalName.textContent = card.name;
  modalCatch.textContent = card.catch;

  if (card.image) {
    modalImage.src = card.image;
    modalImage.alt = card.name;
    modalImage.parentElement.style.display = "block";
  } else {
    modalImage.parentElement.style.display = "none";
  }

  modalFeature.textContent = card.feature;
  modalStrong.textContent = card.strong;
  modalWeak.textContent = card.weak;
  modalManual.textContent = card.manual;

  const shareText = `私は「${card.name}」タイプかも。\n${card.catch}\n#ESTPJP`;
  const shareUrl = location.href;
  shareBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  modal.classList.remove("hidden");
}

function closeDetail() {
  modal.classList.add("hidden");
}

if (closeModal) {
  closeModal.addEventListener("click", closeDetail);
}

modalBg.addEventListener("click", closeDetail);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});

renderCards();
