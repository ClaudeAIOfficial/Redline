/* 红线新闻：简体中文网站。文章可在 ARTICLES 中维护。 */
const ARTICLES = [
  {
    "id": "cities-shaping-china",
    "category": "China",
    "type": "深度报道",
    "title": "走进中国城市，感受发展新图景",
    "excerpt": "从高楼林立的现代城区到保留历史记忆的老街巷，观察中国城市生活的多样面貌。",
    "image": "shanghai-skyline",
    "photo": "photo-1532375810709-75b1da00537c",
    "read": 6,
    "featured": true
  },
  {
    "id": "routes-of-trade",
    "category": "Business",
    "type": "分析",
    "title": "连接世界的贸易通道与合作网络",
    "excerpt": "港口、物流体系与国际合作如何影响货物流通和全球贸易格局？",
    "image": "global-trade",
    "photo": "photo-1494412519320-aa613dfb7738",
    "read": 5
  },
  {
    "id": "future-of-ai",
    "category": "Technology",
    "type": "解读",
    "title": "新一轮科技变革正在如何展开？",
    "excerpt": "从人工智能到数字基础设施，理解新技术背后的机遇与挑战。",
    "image": "tech-chip",
    "photo": "photo-1518770660439-4636190af475",
    "read": 5
  },
  {
    "id": "great-wall",
    "category": "Travel",
    "type": "图文专题",
    "title": "长城之外：山川之间的历史印记",
    "excerpt": "沿着长城的城墙与关隘，探索建筑、自然景观和历史文化。",
    "image": "great-wall",
    "photo": "photo-1508804185872-d7badad00f7d",
    "read": 4
  },
  {
    "id": "asia-connections",
    "category": "Politics",
    "type": "解读",
    "title": "读懂亚洲地区关系的发展脉络",
    "excerpt": "经济往来、外交沟通与共同挑战，共同影响着亚洲地区的合作与交流。",
    "image": "world-map",
    "photo": "photo-1451187580459-43490279c0fa",
    "read": 7
  },
  {
    "id": "rail-journeys",
    "category": "China",
    "type": "深度观察",
    "title": "中国高铁：速度背后的交通新格局",
    "excerpt": "高速铁路正在改变人们对距离、出行和城市连接的理解。",
    "image": "high-speed-rail",
    "photo": "photo-1474487548417-781cb71495f3",
    "read": 5
  },
  {
    "id": "global-economy",
    "category": "Business",
    "type": "观察",
    "title": "全球经济正在面对哪些重要问题？",
    "excerpt": "从供应链到消费信心，梳理影响国际经济讨论的主要议题。",
    "image": "global-trade",
    "photo": "photo-1486406146926-c627a92ad1ab",
    "read": 6
  },
  {
    "id": "living-history",
    "category": "Culture",
    "type": "文化",
    "title": "古建筑里的中国文化与生活美学",
    "excerpt": "透过传统建筑，感受历代匠人的智慧和文化传承的魅力。",
    "image": "chinese-culture",
    "photo": "photo-1547981609-4b6bfe67ca0b",
    "read": 4
  },
  {
    "id": "nature-restoration",
    "category": "Nature",
    "type": "生态",
    "title": "守护自然景观，需要怎样的长期努力？",
    "excerpt": "生态保护离不开社区参与、科学研究与持续的环境治理。",
    "image": "green-landscape",
    "photo": "photo-1464822759023-fed622ff2c3b",
    "read": 5
  },
  {
    "id": "shanghai-then-now",
    "category": "China",
    "type": "图片故事",
    "title": "上海印象：在变与不变之间",
    "excerpt": "从建筑群到城市公共空间，探寻上海不断变化的城市面貌。",
    "image": "shanghai-skyline",
    "photo": "photo-1548919973-5cef591cdbc9",
    "read": 4
  },
  {
    "id": "crafts-and-people",
    "category": "Culture",
    "type": "人物",
    "title": "与传统手艺相伴的人们",
    "excerpt": "看匠人和年轻一代如何让传统技艺融入当代生活。",
    "image": "chinese-culture",
    "photo": "photo-1513519245088-0e12902e5a38",
    "read": 6
  },
  {
    "id": "ai-hardware",
    "category": "Technology",
    "type": "科学",
    "title": "人工智能背后的硬件力量",
    "excerpt": "算力、能源与工程创新共同决定现代计算系统的能力边界。",
    "image": "tech-chip",
    "photo": "photo-1518770660439-4636190af475",
    "read": 5
  },
  {
    "id": "world-questions",
    "category": "World",
    "type": "国际观察",
    "title": "观察世界：值得关注的五个国际议题",
    "excerpt": "从国际合作到地区关系，理解全球公共讨论中的重要问题。",
    "image": "world-map",
    "photo": "photo-1451187580459-43490279c0fa",
    "read": 7
  },
  {
    "id": "logistics-hubs",
    "category": "China",
    "type": "经济",
    "title": "走进连接中国与世界的物流枢纽",
    "excerpt": "了解交通与物流系统如何让商品跨越地区与国界。",
    "image": "global-trade",
    "photo": "photo-1494412519320-aa613dfb7738",
    "read": 5
  },
  {
    "id": "journey-through-china",
    "category": "Travel",
    "type": "旅行",
    "title": "中国旅行指南：发现热门景点之外的风景",
    "excerpt": "从地方美食到静谧山水，体验更丰富的中国旅行方式。",
    "image": "chinese-culture",
    "photo": "photo-1508804185872-d7badad00f7d",
    "read": 6
  },
  {
    "id": "future-of-transport",
    "category": "Technology",
    "type": "创新",
    "title": "未来交通为何正在发生变化？",
    "excerpt": "数字技术和工程创新正在影响城市出行与交通系统。",
    "image": "high-speed-rail",
    "photo": "photo-1474487548417-781cb71495f3",
    "read": 5
  },
  {
    "id": "green-spaces",
    "category": "Nature",
    "type": "气候",
    "title": "森林、河流与山野：生态保护的长远视角",
    "excerpt": "了解自然景观的变化，以及持续保护为什么需要时间。",
    "image": "green-landscape",
    "photo": "photo-1441974231531-c6227db76b6e",
    "read": 4
  },
  {
    "id": "between-cultures",
    "category": "World",
    "type": "社会",
    "title": "跨越文化边界的人与故事",
    "excerpt": "语言、旅行和共同经历，能够为不同文化之间的理解创造机会。",
    "image": "chinese-culture",
    "photo": "photo-1529156069898-49953e39b3ac",
    "read": 5
  },
  {
    "id": "mountains-and-valleys",
    "category": "Travel",
    "type": "摄影",
    "title": "镜头里的中国山川与峡谷",
    "excerpt": "在层峦叠嶂和山谷河流之间，感受中国自然景观的多样性。",
    "image": "green-landscape",
    "photo": "photo-1464822759023-fed622ff2c3b",
    "read": 4
  },
  {
    "id": "explaining-trade",
    "category": "Business",
    "type": "知识解读",
    "title": "国际贸易是怎样运作的？",
    "excerpt": "用简单的方式理解运输路线、成本、贸易规则和货物往来。",
    "image": "global-trade",
    "photo": "photo-1494412519320-aa613dfb7738",
    "read": 6
  },
  {
    "id": "design-across-centuries",
    "category": "Culture",
    "type": "艺术与设计",
    "title": "跨越时代的中国设计之美",
    "excerpt": "从传统纹样到材料工艺，发现经典设计与现代生活之间的联系。",
    "image": "chinese-culture",
    "photo": "photo-1547981609-4b6bfe67ca0b",
    "read": 5
  },
  {
    "id": "questions-of-technology",
    "category": "Opinion",
    "type": "观点",
    "title": "面对新兴技术，我们应该思考什么？",
    "excerpt": "创新之外，还需要讨论机会、信任、普及程度和社会责任。",
    "image": "tech-chip",
    "photo": "photo-1518770660439-4636190af475",
    "read": 5
  },
  {
    "id": "video-great-wall",
    "category": "Video",
    "type": "影像专题",
    "title": "影像观察：穿越长城沿线的壮美山河",
    "excerpt": "从建筑遗迹到自然地貌，认识长城及其周边的景观。",
    "image": "great-wall",
    "photo": "photo-1508804185872-d7badad00f7d",
    "read": 3
  },
  {
    "id": "video-city",
    "category": "Video",
    "type": "影像专题",
    "title": "影像观察：走进未来城市",
    "excerpt": "观察城市建设、公共空间与交通网络的发展方向。",
    "image": "shanghai-skyline",
    "photo": "photo-1532375810709-75b1da00537c",
    "read": 3
  },
  {
    "id": "video-culture",
    "category": "Video",
    "type": "影像专题",
    "title": "影像观察：多角度认识中国文化",
    "excerpt": "从城市、人物到艺术与传统，感受中国文化的丰富层次。",
    "image": "chinese-culture",
    "photo": "photo-1547981609-4b6bfe67ca0b",
    "read": 3
  },
  {
    "id": "global-diplomacy",
    "category": "Politics",
    "type": "国际事务",
    "title": "国际外交如何推动对话与合作？",
    "excerpt": "通过基本概念，了解国际谈判中的机构、利益和决策机制。",
    "image": "world-map",
    "photo": "photo-1451187580459-43490279c0fa",
    "read": 6
  },
  {
    "id": "science-collaboration",
    "category": "Technology",
    "type": "科学",
    "title": "科学合作为何需要跨越国界？",
    "excerpt": "科研成果离不开知识交流、不同领域的专长与国际协作。",
    "image": "tech-chip",
    "photo": "photo-1518770660439-4636190af475",
    "read": 5
  },
  {
    "id": "global-communities",
    "category": "World",
    "type": "人物",
    "title": "新闻之外：社区如何应对变化？",
    "excerpt": "地方经验和真实生活视角，能够让国际议题呈现更多层次。",
    "image": "shanghai-skyline",
    "photo": "photo-1529156069898-49953e39b3ac",
    "read": 5
  }
];
const LATEST_STORY = {
  "id": "xin-poo-online-controversy",
  "category": "Politics",
  "type": "社会观察",
  "title": "“Xin Poo”图片引发争议：网传发布者遭拘留，事件真实性仍待核实",
  "excerpt": "一张讽刺习近平的恶搞图片在网上流传，并伴随发布者遭拘留的说法。相关身份、互动数据和拘留传闻仍缺乏独立证实。",
  "localImage": "assets/xin-poo-post.webp",
  "read": 12,
  "date": "2026年11月11日",
  "bodyHtml": "<p><strong>一张将中国国家主席习近平形象改成粪便造型的图片，伴随着一则有关发布者遭到警方拘留的消息，引出了一个敏感问题：当网络幽默涉及政治权力时，表达自由的边界究竟在哪里？</strong></p>\n<h2>一张图片，一句配文</h2>\n<p>一张标注日期为2026年10月22日的社交平台X帖子截图显示，名为“陈家浩”（@chenjiahao）的账号发布了一张经过修改的习近平演讲图片。</p>\n<p>图片保留了中国传统建筑的红色背景、演讲台、麦克风以及习近平高举右拳的姿势。然而，原本的头部被替换成一个棕色的粪便造型，面部依然保留了习近平的五官特征。</p>\n<p>帖文没有长篇政治评论，也没有直接提出任何政治诉求。</p>\n<p>只有一句话：</p>\n<p><strong>“Xin Poo 😂😂😂”</strong></p>\n<p>“Xin Poo”通过英文发音将习近平的姓名与“Poo”一词结合，形成了带有嘲讽意味的政治绰号。</p>\n<p>这种表达方式简单、直接，而且几乎不需要任何解释。即使不了解中国政治的海外网民，也能从图片中迅速理解其讽刺对象。</p>\n<h2>截图显示2000万次浏览，数字尚未获得独立证实</h2>\n<p>流传的截图显示，这条帖子拥有2000万次浏览、130万次点赞、34.7万次转发、8200条评论以及6400次收藏。</p>\n<p>如果这些数据属实，其传播范围将远远超过普通的政治评论帖文。</p>\n<p>但必须指出，目前没有独立的平台数据或原始帖子记录能够证实上述数字。</p>\n<p>截图中的账户名称、头像和互动数据，也不足以证明发布者的真实身份。</p>\n<h2>网传发布者遭拘留，关键细节仍然缺失</h2>\n<p>与图片一起出现的，还有一则有关发布者陈家浩遭到中国警方拘留的说法。</p>\n<p>这一消息称，拘留事件与其发布讽刺习近平的图片有关。</p>\n<p>然而，截至2026年11月11日，尚未找到能够独立证实这次拘留的可靠公开资料。</p>\n<p>目前无法确认陈家浩是否遭到警方传唤、行政拘留或刑事拘留，也无法确定是否存在正式立案、指控或其他法律程序。</p>\n<p>对于这一消息，仍有几个关键问题需要回答：</p>\n<ul>\n<li>是否存在可以核实的原始X帖文？</li>\n<li>发布账号是否属于一名真实且能够确认身份的当事人？</li>\n<li>是否有家属、律师或独立媒体证实其遭到拘留？</li>\n<li>是否存在警方通报、法律文书或其他能够支持拘留说法的证据？</li>\n</ul>\n<p>在这些问题得到回答之前，不能把网络传言直接等同于已经发生的逮捕事件。</p>\n<h2>为什么一张政治恶搞图片会引起关注？</h2>\n<p>“Xin Poo”图片之所以具有争议性，与中国长期以来围绕国家领导人形象的网络审查问题密切相关。</p>\n<p>在社交媒体时代，政治人物经常成为网络恶搞的对象。从漫画、表情包到经过修改的照片，网络用户利用幽默表达政治观点，早已成为全球互联网文化的一部分。</p>\n<p>但不同国家和地区对于政治表达的限制存在明显差异。</p>\n<p>在中国，涉及国家领导人、政治体制及敏感历史事件的网络内容，可能面临更严格的平台管理和内容审查。</p>\n<p>人权观察组织在《2026年世界报告》中指出，中国政府继续对信息传播实施严格控制，并对批评政府的人士采取打压措施。</p>\n<p>国际特赦组织也在其中国人权年度报告中，对网络审查、表达自由以及针对异议人士的执法行动表达关注。</p>\n<p>这些背景使得一张看似荒诞的恶搞图片，也可能引发严肃的政治讨论。</p>\n<h2>从“小熊维尼”到“Xin Poo”</h2>\n<p>这不是习近平的公众形象第一次成为网络恶搞的素材。</p>\n<p>早在2013年，网络用户便开始将习近平与动画角色小熊维尼进行比较。</p>\n<p>相关图片随后在海外社交平台传播，并逐渐成为国际互联网讨论中国政治审查时经常引用的文化符号。</p>\n<p>2017年，多家国际媒体报道，中国部分社交平台限制了与小熊维尼有关的特定图片和搜索内容。</p>\n<p>2018年，围绕国家主席任期限制的政治讨论再次使有关小熊维尼的表情包受到关注。</p>\n<p>这些历史事件说明，原本娱乐性质的网络形象，有时会因政治语境而获得新的含义。</p>\n<p>“Xin Poo”采用了类似的视觉表达逻辑：通过一个简单的形象替换，把国家领导人的庄严形象与日常互联网幽默放在一起，制造强烈反差。</p>\n<h2>网络幽默与政治权力的冲突</h2>\n<p>政治恶搞是否应该受到法律惩罚，一直是言论自由讨论中的重要问题。</p>\n<p>批评者认为，公众有权通过讽刺、漫画和表情包表达对政治人物的意见。国家领导人拥有巨大的公共权力，因此也应当接受公众监督、批评甚至尖锐嘲讽。</p>\n<p>另一方面，不同司法体系对于侮辱、诽谤、公共秩序及政治表达设有不同规定。某种表达是否违法，通常需要结合具体内容、适用法律及司法程序进行判断。</p>\n<p>不过，对公共人物的冒犯性嘲讽，并不自动等同于暴力威胁或危害公共安全。</p>\n<p>如果一个人仅仅因为制作或者分享政治表情包而失去自由，就会产生有关处罚比例、法律依据与表达自由保障的严肃问题。</p>\n<h2>一张图片背后更大的问题</h2>\n<p>互联网传播的一个特点，是公众往往先看到图片与情绪化标题，随后才有机会接触事件的完整事实。</p>\n<p>政治敏感内容尤其如此。</p>\n<p>一张图片可能迅速引发大量讨论，而关于图片来源、作者身份以及相关人员处境的信息，却未必能够同步获得证实。</p>\n<p>因此，对“Xin Poo”事件的关注，需要区分两个独立问题。</p>\n<p>首先，这张图片展示了一种明确针对习近平的网络嘲讽表达，其政治含义可以直接从图像和文字中识别。</p>\n<p>其次，关于图片发布者遭到拘留的说法，仍然需要独立证据支持。</p>\n<p>不能因为中国存在真实的网络审查案例，就推定每一则有关政治恶搞者遭到逮捕的消息都是真实的。</p>\n<p>同样，对未经证实消息的谨慎核查，也不意味着应该忽视真实存在的表达自由问题。</p>\n<h2>事件仍有待进一步核实</h2>\n<p>截至目前，“Xin Poo”图片及相关拘留说法所引发的争议，主要涉及政治人物形象、社交平台传播以及网络言论自由三个方面。</p>\n<p>发布者是否真的受到法律处罚，仍然是整个事件最需要证实的问题。</p>\n<p>如果未来出现可靠的原始帖文、当事人证言、法律文件或独立新闻报道，相关信息才能获得进一步确认。</p>\n<p>在此之前，这张图片更适合作为讨论政治恶搞与网络审查的案例，而非一宗已经获得证实的拘留事件。</p>\n<p><strong>一张恶搞图片究竟应当得到怎样的对待？这个问题值得讨论。而对于任何涉及真实人物遭到拘留的指控，事实核查同样不可缺少。</strong></p>"
};
ARTICLES.push(LATEST_STORY);const CATEGORIES=['All','China','World','Politics','Business','Technology','Culture','Travel','Nature','Video','Opinion'];
const CATEGORY_NAMES={"All": "全部", "China": "中国", "World": "国际", "Politics": "时政", "Business": "财经", "Technology": "科技", "Culture": "文化", "Travel": "旅游", "Nature": "生态", "Video": "视频", "Opinion": "观点"};
const CATEGORY_DESCRIPTIONS={
 All:'关注中国与世界的重要话题，探索不同领域的故事与视角。',
 China:'从城市生活到社会文化，持续关注中国的不同面貌。',
 World:'理解全球议题，关注地区变化与国际交流。',
 Politics:'关注公共政策、外交关系与国际事务。',
 Business:'解读经济、市场、贸易与产业发展。',
 Technology:'观察科技创新、科学研究与数字生活。',
 Culture:'发现艺术、人物、历史与文化传承。',
 Travel:'探索旅途中的城市、人文与自然风光。',
 Nature:'关注生态、环境与自然保护。',
 Video:'以影像视角探索世界各地的故事。',
 Opinion:'通过观点与评论拓展对话和思考。'
};
const app=document.getElementById('app');
const q=(a)=>encodeURIComponent(a);
const photoUrl=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500&q=83`;
const catName=(cat)=>CATEGORY_NAMES[cat]||cat;
function image(article,cls='',eager=false){return `<img class="${cls}" src="${article.localImage||photoUrl(article.photo)}" alt="${escapeHtml(article.title)}相关图片" ${eager?'fetchpriority="high"':'loading="lazy"'} onerror="this.onerror=null;this.src='assets/${article.image}.webp'"/>`}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]))}
function link(article){return `?article=${q(article.id)}`}
function sect(cat){return `?section=${q(cat)}`}
function dateLong(){return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(new Date())}
function sectionHead(title,href){return `<div class="section-head"><h2 class="section-title">${title}</h2><a class="section-more" href="${href}" data-route>查看更多 <span>→</span></a></div>`}
function coverCard(a,large=false){return `<a class="story-cover ${large?'hero-main':''}" data-route href="${link(a)}">${image(a,'',true)}<div class="story-cover-content"><span class="cover-label">${catName(a.category)} / ${a.type}</span><h2>${a.title}</h2>${large?`<p class="cover-excerpt">${a.excerpt}</p>`:''}<div class="cover-meta"><span>红线新闻</span><span class="meta-dot"></span><span>阅读约 ${a.read} 分钟</span></div></div></a>`}
function thumb(a){return `<a class="thumb" data-route href="${link(a)}">${image(a)}</a>`}
function smallCard(a){return `<div class="news-card">${thumb(a)}<span class="card-category">${catName(a.category)}</span><h3><a data-route href="${link(a)}">${a.title}</a></h3></div>`}
function indexCard(a){return `<article class="index-card">${thumb(a)}<span class="card-category">${catName(a.category)} / ${a.type}</span><h3><a data-route href="${link(a)}">${a.title}</a></h3><p>${a.excerpt}</p><span class="card-read">阅读约 ${a.read} 分钟</span></article>`}
function rowSection(category,indices){const list=indices.map(i=>ARTICLES[i]);return `<section class="container section">${sectionHead(catName(category),sect(category))}<div class="category-layout"><article class="feature-card">${thumb(list[0])}<span class="card-category">${catName(list[0].category)}</span><h3><a data-route href="${link(list[0])}">${list[0].title}</a></h3><p>${list[0].excerpt}</p></article>${list.slice(1,3).map(a=>`<div class="news-card">${thumb(a)}<span class="card-category">${catName(a.category)}</span><h3><a data-route href="${link(a)}">${a.title}</a></h3><div class="category-mini-list">${(ARTICLES.filter(x=>x.category===category&&x.id!==a.id&&x.id!==list[0].id).slice(0,2)).map(x=>`<a data-route href="${link(x)}">${x.title}</a>`).join('')}</div></div>`).join('')}</div></section>`}
function home(){let hero=[LATEST_STORY,ARTICLES[0],ARTICLES[1]];let picks=[ARTICLES[3],ARTICLES[4],ARTICLES[5]],latest=[LATEST_STORY,ARTICLES[9],ARTICLES[12],ARTICLES[6],ARTICLES[10],ARTICLES[13]];return `<div class="page-home"><div class="container"><div class="editorial-note"><span class="red-rule"></span><span class="headline-date">${dateLong()}</span><span>中国视角 · 全球新闻</span><span class="headline-sub">聚焦中国，放眼世界</span></div><div class="headline-row"><div><span class="eyebrow">焦点观察</span><h1>聚焦时代，看见世界。</h1></div><p>关注中国与世界的故事、人物和观点。</p></div><div class="hero-grid">${hero.map((a,i)=>coverCard(a,i===0)).join('')}</div><div class="trending-strip"><span class="trend-label">热点关注</span><a class="trend-text" href="${link(LATEST_STORY)}" data-route>${LATEST_STORY.title}</a><a class="trend-link" data-route href="?section=World">全部报道 →</a></div></div>
  <section class="container section">${sectionHead('编辑精选','?section=All')}<div class="editors-layout"><div><article class="editors-feature">${thumb(picks[0])}<div><span class="card-category">${catName(picks[0].category)} / ${picks[0].type}</span><h3><a data-route href="${link(picks[0])}">${picks[0].title}</a></h3><p>${picks[0].excerpt}</p><span class="card-read">阅读约 ${picks[0].read} 分钟</span></div></article><div class="small-grid">${picks.slice(1).map(smallCard).join('')}</div><div class="numbers">${[ARTICLES[6],ARTICLES[11],ARTICLES[8]].map((x,i)=>`<div class="number-card"><span class="number">0${i+1}</span><h4><a data-route href="${link(x)}">${x.title}</a></h4></div>`).join('')}</div></div><aside class="latest-side"><h3 class="side-title">最新文章</h3>${latest.map(a=>`<div class="side-item"><div class="side-meta">${catName(a.category)}</div><h4><a data-route href="${link(a)}">${a.title}</a></h4></div>`).join('')}</aside></div></section>
 ${rowSection('China',[9,13,5])}${rowSection('World',[12,17,27])}${rowSection('Business',[6,19,1])}
 <section class="video-banner"><div class="container video-inner">${sectionHead('影像与专题',sect('Video'))}<div class="video-grid">${ARTICLES.filter(x=>x.category==='Video').map((x,i)=>`<div class="news-card ${i===0?'video-lead':''}"><a data-route href="${link(x)}" class="thumb">${image(x)}<div class="video-badge"><span class="play-circle">▶</span> 影像专题</div></a><span class="card-category">视频 / ${x.type}</span><h3><a data-route href="${link(x)}">${x.title}</a></h3></div>`).join('')}</div></div></section>
 ${rowSection('Technology',[2,11,26])}${rowSection('Culture',[7,10,20])}
 <section class="discover-band"><div class="container discover-inner"><div class="discover-copy"><span class="eyebrow">红线视角</span><h2>读懂新闻背后的故事。</h2><p>人物、城市与思想，在这里展开对话。</p></div><a data-route href="?page=about" class="discover-link">了解红线新闻 &nbsp; ↗</a></div></section></div>`}
function sectionPage(category='All',term=''){
 const search=term.trim().toLowerCase();let list=ARTICLES.filter(a=>(category==='All'||a.category.toLowerCase()===category.toLowerCase())&&(!search||`${a.title} ${a.excerpt} ${a.category} ${catName(a.category)} ${a.type}`.toLowerCase().includes(search)));
 const title=search?`“${escapeHtml(term)}”的搜索结果`:catName(category);
 const subtitle=search?`找到 ${list.length} 篇相关文章。`:CATEGORY_DESCRIPTIONS[category]||CATEGORY_DESCRIPTIONS.All;
 return `<div><div class="page-top"><div class="container"><div class="breadcrumb"><a data-route href="./">首页</a><span>/</span>${title}</div><span class="eyebrow">红线新闻 / 新闻栏目</span><h1>${title}</h1><p class="description">${subtitle}</p></div></div><div class="container category-index"><div class="category-filters">${CATEGORIES.map(c=>`<a data-route class="filter-tag ${!search&&c===category?'active':''}" href="${sect(c)}">${catName(c)}</a>`).join('')}</div>${list.length?`<div class="index-grid">${list.map(indexCard).join('')}</div>`:'<div class="empty-search">没有找到相关内容。试试搜索“中国”“科技”“旅游”或“文化”。</div>'}</div></div>`}
function bodyFor(a){
 if(a.bodyHtml)return a.bodyHtml;
 const topic=catName(a.category);
 return `<p class="article-lead">${a.excerpt}</p>
 <p>${a.title}，可以从历史背景、现实生活以及不同群体的体验三个方面来理解。观察一个话题时，单独看某个现象往往不够；将它放回更大的社会与地理环境中，才能看见更完整的图景。</p>
 <h2>从不同角度理解${topic}话题</h2>
 <p>相关议题通常涉及多种因素。地区差异、经济发展、公共需求以及个人选择，都可能影响人们的观察与判断。比较不同角度，有助于厘清问题本身，而不是只停留在一个简单的结论上。</p>
 <p>持续关注变化，也需要区分长期趋势和短期现象。理解背景、核对信息来源并比较不同观点，能够帮助我们更全面地认识事物的发展。</p>
 <h2>值得持续关注的方向</h2>
 <p>接下来，可以从新的研究成果、政策变化、行业实践以及个人生活经验中寻找更多线索。对于仍存在争议的问题，应关注数据与事实，也应保留审慎判断的空间。</p>`;
}
function articlePage(id){const a=ARTICLES.find(x=>x.id===id);if(!a)return `<div class="container static-page"><h1>未找到文章</h1><p>您访问的文章不存在，或已更改地址。</p><p><a href="./" data-route>返回首页 →</a></p></div>`;
 const related=ARTICLES.filter(x=>x.id!==a.id&&(x.category===a.category||x.image===a.image)).slice(0,3);
 return `<div class="article-wrap"><div class="container"><div class="article-top"><div class="breadcrumb"><a data-route href="./">首页</a><span>/</span><a data-route href="${sect(a.category)}">${catName(a.category)}</a><span>/</span>${a.type}</div><span class="eyebrow">${catName(a.category)} / ${a.type}</span><h1>${a.title}</h1><p class="article-dek">${a.excerpt}</p><div class="article-byline"><span class="byline-brand">红线新闻</span>${a.date?`<span>${a.date}</span>`:""}<span>阅读约 ${a.read} 分钟</span></div></div><figure class="article-hero ${a.localImage?'article-hero-screenshot':''}">${image(a,'',true)}${a.localImage?'<figcaption>网传社交平台帖文截图，相关账号信息、互动数据及拘留说法均未获独立证实。</figcaption>':''}</figure><div class="article-content-layout"><aside class="article-share">分享文章<button type="button" class="copy-link" data-id="${a.id}">复制链接</button><button type="button" class="share-x" data-id="${a.id}">分享到 X</button></aside><article class="article-body">${bodyFor(a)}</article></div><section class="section" style="margin-top:75px">${sectionHead('相关阅读',sect(a.category))}<div class="related-grid">${related.map(smallCard).join('')}</div></section></div></div>`}
function staticPage(name){const pages={
 about:{title:'关于红线新闻',text:`<p><strong>红线新闻（Redline China）</strong>关注中国与世界的故事，涵盖国际事务、财经、科技、文化和社会生活等领域。</p><h2>我们的关注方向</h2><p>我们希望通过清晰的标题、丰富的视角和易于阅读的页面，让读者能够快速找到感兴趣的话题，并进一步理解其背景。</p><h2>联系我们</h2><p>您可以通过 <a href="https://x.com/RedlineChina" target="_blank" rel="noopener noreferrer" style="color:var(--red);font-weight:800">X 平台 @RedlineChina ↗</a> 关注最新动态。</p><p>红线新闻为独立品牌，与中国国际电视台（CGTN）无隶属关系。</p>`},
 privacy:{title:'隐私政策',text:`<p>本网站目前不提供用户注册服务，也不通过站内搜索收集或保存个人查询内容。搜索功能直接在您的浏览器内运行。</p><p>网站使用外部图片和字体服务。加载这些资源时，相关提供方可能按照其隐私政策处理网络请求信息。</p><p>如日后增加数据分析、广告、订阅或其他第三方服务，我们将相应更新本政策。</p>`},
 terms:{title:'使用条款',text:`<p>欢迎访问红线新闻。您可以通过本站浏览文章、搜索内容以及分享文章链接。</p><p>除另有说明外，本站的品牌元素及页面设计均受适用法律保护。引用、转载或商业使用本站内容前，请确认相应授权。</p><p>外部链接由第三方网站管理。点击此类链接后，相关网站的规则与隐私政策可能适用。</p><p>如需联系网站管理方，请通过我们的官方 X 账号发送消息。</p>`}
 };const obj=pages[name]||{title:'页面不存在',text:'<p>您访问的页面暂时无法打开。</p>'};return `<div class="container static-page"><div class="breadcrumb"><a href="./" data-route>首页</a><span>/</span>${obj.title}</div><span class="eyebrow">红线新闻</span><h1>${obj.title}</h1>${obj.text}</div>`}
function render(){const qs=new URLSearchParams(window.location.search);const article=qs.get('article'),section=qs.get('section'),search=qs.get('search'),page=qs.get('page');
 let title='红线新闻｜中国视角，全球新闻';
 if(article){app.innerHTML=articlePage(article);title=(ARTICLES.find(x=>x.id===article)?.title||'文章')+'｜红线新闻'}
 else if(search!==null){app.innerHTML=sectionPage('All',search);title='搜索｜红线新闻'}
 else if(section){let c=CATEGORIES.find(s=>s.toLowerCase()===section.toLowerCase())||'All';app.innerHTML=sectionPage(c);title=catName(c)+'｜红线新闻'}
 else if(page){app.innerHTML=staticPage(page);title=({about:'关于我们',privacy:'隐私政策',terms:'使用条款'}[page]||'页面')+'｜红线新闻'}
 else app.innerHTML=home();
 document.title=title;
 const active=(section||'home').toLowerCase();document.querySelectorAll('.nav-link').forEach(a=>{a.classList.toggle('active',a.dataset.section?.toLowerCase()===active||(!section&&!article&&!page&&!search&&a.dataset.section==='home'))});
 document.getElementById('app').focus({preventScroll:true});
}
function goto(url){const next=new URL(url,window.location.href);try{history.pushState({},'',next.pathname+next.search+next.hash)}catch(e){window.location.href=next.href;return}closeSearch();document.querySelector('.primary-nav').classList.remove('nav-open');document.getElementById('menuButton').setAttribute('aria-expanded','false');render();window.scrollTo({top:0,behavior:'instant'})}
function openSearch(){document.getElementById('searchOverlay').hidden=false;document.body.style.overflow='hidden';setTimeout(()=>document.getElementById('searchInput').focus(),30)}
function closeSearch(){document.getElementById('searchOverlay').hidden=true;document.body.style.overflow=''}
let toastTimeout;
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>t.classList.remove('show'),2500)}
document.addEventListener('click',e=>{
 const route=e.target.closest('a[data-route]');if(route){if(e.ctrlKey||e.metaKey||e.shiftKey||e.button!==0)return;e.preventDefault();goto(route.getAttribute('href'));return}
 if(e.target.closest('.search-open')){openSearch();return}
 if(e.target.closest('[data-close-search]')){closeSearch();return}
 const fast=e.target.closest('[data-query]');if(fast){goto(`?search=${q(fast.dataset.query)}`);return}
 const copy=e.target.closest('.copy-link');if(copy){const url=new URL(`?article=${q(copy.dataset.id)}`,location.href).href;if(navigator.clipboard?.writeText){navigator.clipboard.writeText(url).then(()=>toast('链接已复制')).catch(()=>toast('请复制链接：'+url))}else{const inp=document.createElement('input');inp.value=url;document.body.append(inp);inp.select();document.execCommand('copy');inp.remove();toast('链接已复制')}return}
 const share=e.target.closest('.share-x');if(share){const a=ARTICLES.find(x=>x.id===share.dataset.id),url=new URL(`?article=${q(a.id)}`,location.href).href;window.open(`https://twitter.com/intent/tweet?text=${q(a.title)}&url=${q(url)}`,'_blank','noopener,noreferrer');return}
});
document.getElementById('menuButton').addEventListener('click',()=>{const nav=document.querySelector('.primary-nav');const open=nav.classList.toggle('nav-open');document.getElementById('menuButton').setAttribute('aria-expanded',String(open))});
document.getElementById('languageButton').addEventListener('click',()=>toast('当前使用简体中文'));
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();const s=document.getElementById('searchInput').value.trim();if(s)goto(`?search=${q(s)}`)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
window.addEventListener('popstate',render);
document.getElementById('topDate').textContent=dateLong();document.getElementById('footerYear').textContent=new Date().getFullYear();
render();