import { assets } from "./assets";

export const siteMeta = {
  contact: "lu_jiayi@shu.edu.cn · 13681684365",
  profile:
    "陆佳艺 · Jiayi Lu，上海大学人工智能专业本科生，大三。关注 LLM、AI Agent、RAG、AI 驱动的软件工程，持续围绕检索、推理、验证与部署构建可落地的智能系统。",
  education: [
    "Shanghai University · AI",
    "GPA 3.61 · Top 15%",
    "IELTS 6.5 / CET-4 631 / CET-6 570"
  ],
  researchFocus: [
    "Large Language Model",
    "AI Agent",
    "RAG",
    "VLM / 多模态大模型",
    "NLP 与知识增强",
    "Control · Systems"
  ],
  experience: {
    period: "2025.6 - 2025.9",
    company: "一万伏特（上海）信息科技有限公司｜大模型算法实习生",
    paragraphs: [
      "参与 40 万条心理咨询对话数据的收集、清洗、脱敏、增强与质量检测，整理为 Alpaca、ShareGPT 等标准训练格式；使用 LlamaFactory 对 Qwen3-32B 与 Qwen2.5-72B 进行 SFT 微调，并参与评测、推理部署与回复质量优化。",
      "同时基于 Dify 与 LangChain 构建多 Agent 心理咨询系统，设计 Router Agent、Information Agent、Diagnosis Agent、Recommendation Agent 协作架构，维护专业知识库与长期/短期记忆机制，并使用 Vue.js 完成交互界面、历史记录与 Agent 分析可视化开发。"
    ]
  }
};

export const projects = [
  {
    slug: "counseling-agent",
    index: "01 / COUNSELING AGENT",
    title: "心理咨询多 Agent 系统",
    summary:
      "在大模型算法实习期间，围绕心理咨询场景参与数据工程、模型微调、多 Agent 协作与前端交互开发。系统以 Router Agent、Information Agent、Diagnosis Agent、Recommendation Agent 为核心，结合专业心理学知识库与长期/短期记忆机制，提升多轮咨询中的引导能力、上下文连续性与判定可靠性。",
    tags: ["Qwen3-32B / Qwen2.5-72B", "Dify / LangChain", "Memory / Prompt / Frontend"],
    image: assets.multiAgentImage,
    imageVariant: "default",
    detail: {
      summary:
        "这个项目让我第一次比较完整地把数据处理、模型微调、知识增强、Agent 协作和前端交互串成同一条链路。相比单一问答能力，我更关心的是系统能否在多轮咨询里保持专业边界、上下文连续性和解释上的稳定感。",
      tags: ["Qwen3-32B / Qwen2.5-72B", "Dify / LangChain", "Prompt Engineering", "Long-term / Short-term Memory", "Vue.js"],
      sections: [
        {
          title: "我负责的部分",
          bullets: [
            "处理 40 万条心理咨询对话数据，包括清洗、脱敏、增强、格式转换与质量检测。",
            "使用 LlamaFactory 完成 Qwen 系列模型的 SFT 微调，并参与评测、部署和效果迭代。",
            "设计 Router、Information、Diagnosis、Recommendation 的协作结构。",
            "构建心理学知识库和长期 / 短期记忆机制，提升多轮咨询的连贯性。",
            "使用 Vue.js 实现用户交互、历史记录与 Agent 分析可视化界面。"
          ]
        },
        {
          title: "我最在意的系统问题",
          paragraphs: [
            "这个项目里最难的不是让模型开口说话，而是让系统在专业判断、共情表达和安全边界之间保持平衡。一旦进入多轮咨询，错误信息被放大的风险会比普通问答场景高得多。",
            "我也越来越意识到，多 Agent 不是简单地加节点，而是要把角色边界、状态管理和回退机制设计清楚，否则系统只会更复杂。"
          ]
        }
      ],
      sideTitle: "结果与收获",
      sideBody:
        "这个项目让我真正把大模型训练、知识库、Prompt、Agent 工作流和产品界面理解成同一个系统问题，也进一步明确了我对可部署、可迭代智能系统的长期兴趣。"
    }
  },
  {
    slug: "maar-agent",
    index: "02 / MAAR-AGENT",
    title: "多源增强多模态 RAG 系统",
    summary:
      "围绕复杂问答中“检索不足、多模态利用率低、幻觉率高”的问题，设计 Multi-source Multi-modal Agent RAG 框架。系统以感知、问题分析、多源检索、重排序、推理生成、事实验证、自我纠错为主线，融合图像、网页与文本检索，并引入 CLIP 一致性、语义一致性与事实一致性验证机制，提升回答的可靠性与可解释性。",
    tags: ["Llama-3.2-11B-Vision-Instruct", "CLIP / SentenceTransformer / BGE", "FAISS / vLLM / validation pipeline"],
    image: assets.maarImage,
    imageVariant: "diagram",
    detail: {
      summary:
        "MAAR-Agent 主要是围绕一个很实际的问题展开的：当问题同时需要文本、网页和图像线索时，RAG 该怎样组织多源信息，并把验证机制真正接到回答链路里，而不是只在最后补一句“请谨慎参考”。",
      tags: ["Llama-3.2-11B-Vision-Instruct", "CLIP", "BGE-large / BGE-reranker", "FAISS", "vLLM"],
      sections: [
        {
          title: "系统主线",
          bullets: [
            "感知：识别问题涉及的文本、网页与图像线索。",
            "问题分析：判断需要哪些检索源与后续推理策略。",
            "多源检索：融合文本检索、网页检索与图像检索。",
            "重排序与生成：通过 reranker 聚焦证据，再进入推理回答。",
            "事实验证与自我纠错：用一致性验证降低幻觉率。"
          ]
        },
        {
          title: "我觉得它真正有意思的地方",
          paragraphs: [
            "这个项目让我开始认真思考一件事：RAG 的问题很多时候并不只是“召回不够”，而是多源证据进入系统后，模型到底根据什么相信某一类线索。",
            "把 CLIP 一致性、语义一致性和事实一致性都串起来之后，我才更清楚地看到，多模态 RAG 真正难的地方不是接入多种检索，而是回答前后的证据治理。"
          ]
        }
      ],
      sideTitle: "附加材料",
      sideLinks: [{ label: "查看完整报告", href: assets.maarReport }],
      sideBody:
        "这个项目帮助我把 Agent Workflow、多模态信息融合和验证式 RAG 放到同一套系统视角里理解，也让我更明确地意识到“检索之后怎么判断证据是否可信”才是真问题。"
    }
  },
  {
    slug: "medical-rag",
    index: "03 / MEDICAL RAG SYSTEM",
    title: "医疗知识库 RAG 系统",
    summary:
      "基于 Milvus Lite、BGE-M3、BGE-Reranker-v2 与 Qwen2.5 构建面向医疗问答场景的知识库系统，完成文档切分、向量化、向量检索、混合检索、重排序与生成式回答链路，并引入查询优化、用户反馈与动态自我优化机制。",
    tags: ["Milvus Lite / BM25 / Hybrid Retrieval", "BGE-M3 / BGE-Reranker-v2", "Qwen2.5 / Streamlit / feedback loop"],
    image: assets.medicalRagImage,
    imageVariant: "diagram",
    detail: {
      summary:
        "这个项目更像是我对 RAG 工程链路的一次完整练习。它让我真正体会到，一个知识问答系统的质量并不只取决于模型，而是高度依赖前面的检索设计、证据排序和失败查询处理方式。",
      tags: ["Milvus Lite", "BGE-M3", "BGE-Reranker-v2", "Qwen2.5", "Streamlit"],
      sections: [
        {
          title: "系统结构",
          bullets: [
            "文档切分与清洗，确保知识入库前具备可检索性。",
            "基于 Milvus Lite 的向量检索，并结合 BM25 做混合检索。",
            "使用 BGE-Reranker-v2 提升证据排序质量。",
            "加入查询优化与用户反馈，形成动态自我优化闭环。"
          ]
        },
        {
          title: "实践中的判断",
          paragraphs: [
            "做这个项目时我最直观的感觉是，很多所谓“模型回答不行”的问题，其实都能追溯到更前面的链路设计，比如 chunk 过碎、召回覆盖不够，或者 rerank 没有把真正关键的证据放到前面。",
            "也正因为这样，我越来越倾向于把 RAG 看成系统优化问题，而不是只盯着生成模型本身。"
          ]
        }
      ],
      sideTitle: "附加材料",
      sideLinks: [
        { label: "GitHub Repo", href: "https://github.com/lujiayyi/medical-rag-system" },
        { label: "查看完整报告", href: assets.medicalReport }
      ],
      sideBody:
        "这个项目帮助我把向量数据库、Embedding、Hybrid Retrieval、Rerank 和反馈回路真正放进一条可调试的流水线里，也让我形成了更稳定的 RAG 工程视角。"
    }
  }
];

export const notes = [
  {
    slug: "llm-evaluation",
    index: "LEARNING NOTE 01 · LLM EVALUATION",
    category: "EVALUATION",
    title: "大模型评测，到底在评什么？",
    cardSummary:
      "从能力边界、鲁棒性到系统场景评测，梳理我目前对大模型测评的理解，以及为什么评测应该前置到系统设计阶段。",
    heroTitle: "大模型测评：从“评测什么”到“如何设计可信评测”",
    heroSummary:
      "这篇笔记记录的是我目前对大模型评测的一点整理。越往后做项目，越能感觉到：如果没有一套像样的评测框架，模型看起来再强，最后也很难判断它到底哪里可靠、哪里只是碰巧答对。",
    tags: ["What to evaluate", "Where to evaluate", "How to evaluate", "Robustness", "Trustworthy Evaluation"],
    thumb: assets.noteLlmEvalImage,
    articleHtml: `
      <header class="note-source-hero note-source-hero-eval">
        <p class="eyebrow">LEARNING NOTE 01 · LLM EVALUATION</p>
        <h1>大模型评测，到底在评什么？</h1>
        <p class="dek">很多人聊大模型时，更关心参数、榜单和新能力，但真正决定模型能不能进现实世界的，往往不是“会不会”，而是“评得准不准”。评测这件事的三个关键问题是：评什么、去哪评、怎么评。</p>
        <div class="hero-grid">
          <div class="thesis">
            <strong>核心判断</strong>
            <p>大模型评测不该只是论文最后那张分数表，而应该被当成一门独立能力来建设。因为模型越强、应用越广、风险越高，传统那套静态、公开、单维度的评法就越不够用了。</p>
          </div>
          <div class="signal">
            <div class="signal-card">
              <b>What</b>
              <span>模型到底该评哪些能力和风险</span>
            </div>
            <div class="signal-card">
              <b>Where</b>
              <span>该用哪些数据集和 benchmark</span>
            </div>
            <div class="signal-card">
              <b>How</b>
              <span>该用自动指标还是人工评审</span>
            </div>
          </div>
        </div>
        <figure>
          <img src="${assets.llmEvalWhatWhereHowImage}" alt="What Where How evaluation framework" />
          <figcaption>这张图把整篇综述的主线压缩得很清楚：先确定评什么，再决定去哪评，最后才讨论怎么评。</figcaption>
        </figure>
      </header>
      <nav class="toc" aria-label="目录">
        <div class="toc-title">目录</div>
        <ol>
          <li><a href="#sec-1">为什么大模型时代，评测突然变成关键问题</a></li>
          <li><a href="#sec-2">第一层：评什么</a></li>
          <li><a href="#sec-3">第二层：去哪评</a></li>
          <li><a href="#sec-4">第三层：怎么评</a></li>
          <li><a href="#sec-5">我们能看清什么</a></li>
          <li><a href="#sec-6">下一代大模型评测，难点会在哪里</a></li>
        </ol>
      </nav>
      <section id="sec-1">
        <h2>为什么大模型时代，评测突然变成关键问题</h2>
        <p class="lead">在传统机器学习时代，评测通常是模型训练后的最后一步；到了大模型时代，评测越来越像产品设计、系统安全和研究方法论的交叉点。</p>
        <p>原因并不复杂。以前很多模型只负责单一任务，比如分类、排序或者命名实体识别，评测也就围绕单点指标展开。但 LLM 不一样，它既能做问答、写作、推理、翻译，也能进入医疗、教育、科学研究、Agent 调度这类高风险场景。模型能力一旦跨域，评测就不能再只盯着一个分数。</p>
        <p>评测不是为了给模型贴一个“强”或“弱”的标签，而是为了回答三个更实用的问题：</p>
        <div class="diagram">
          <div class="diagram-card">
            <strong>评什么</strong>
            <p>看的是语言能力、推理能力、事实性、鲁棒性，还是公平性、安全性、医疗能力和 Agent 能力。</p>
          </div>
          <div class="diagram-card">
            <strong>去哪评</strong>
            <p>用通用 benchmark、垂直任务数据集，还是动态生成测试集；公开题库是否已经被模型“见过”。</p>
          </div>
          <div class="diagram-card">
            <strong>怎么评</strong>
            <p>靠准确率和 ROUGE 这类自动指标，靠人工标注，还是让模型来当评委。</p>
          </div>
        </div>
        <p>如果只看论文榜单，你看到的是“谁第一”；但如果顺着这三个问题往下看，你会更容易理解“这个第一到底靠不靠谱”。</p>
      </section>
      <section id="sec-2">
        <h2>第一层：评什么</h2>
        <p>把评测对象分成了多个层次，既包括大家熟悉的自然语言任务，也包括社会科学、工程、医学和 Agent 应用。</p>
        <h3>先看最基础的一层：语言任务本身</h3>
        <p>这部分主要覆盖自然语言理解、推理、生成、多语言和事实性。你可以把它理解成 LLM 的基本盘。</p>
        <table>
          <thead>
            <tr>
              <th>能力维度</th>
              <th>典型问题</th>
              <th>为什么重要</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>自然语言理解</td>
              <td>分类、蕴含、情感、阅读理解</td>
              <td>决定模型是否真的理解输入，而不是只会续写</td>
            </tr>
            <tr>
              <td>推理</td>
              <td>数学、逻辑、常识、多跳推断</td>
              <td>是模型从“会说”走向“会想”的关键门槛</td>
            </tr>
            <tr>
              <td>自然语言生成</td>
              <td>摘要、翻译、对话、问答、长文本生成</td>
              <td>最接近真实用户感知，但也最难只用单一指标描述</td>
            </tr>
            <tr>
              <td>多语言</td>
              <td>低资源语言、非拉丁文字、跨语言迁移</td>
              <td>关系到模型能否真正服务全球用户</td>
            </tr>
            <tr>
              <td>事实性</td>
              <td>幻觉、知识一致性、可验证性</td>
              <td>决定模型输出能不能被当成信息使用</td>
            </tr>
          </tbody>
        </table>
        <h3>再往上一层：不只是能力，还要看风险</h3>
        <p>鲁棒性、伦理、偏见和可信度需要被单独拎出来，这一点很重要。因为现实里一个模型“平均表现不错”，不代表它在有对抗性输入、敏感群体、模糊表达或者关键领域中也稳定。</p>
        <div class="grid-2">
          <div class="card">
            <strong>鲁棒性</strong>
            <p>同一个意思换种说法，模型还能不能稳定输出？遇到噪声、拼写错误、越狱提示或者分布外问题时，会不会突然掉线？</p>
          </div>
          <div class="card">
            <strong>可信与公平</strong>
            <p>模型会不会系统性偏向某些群体？会不会给出有害建议？会不会显得很自信，但其实说错了？</p>
          </div>
        </div>
        <figure>
          <img src="${assets.llmEvalOverviewMapImage}" alt="LLM evaluation overview map" />
          <figcaption>评测对象的完整地图：从语言任务、事实性到医疗、Agent 与未来挑战，说明大模型评测早已不是单一分数问题。</figcaption>
        </figure>
        <h3>最后才是应用层能力</h3>
        <p>社会科学、自然科学与工程、医疗、教育、搜索推荐、人格测试、Agent 应用都纳入了评测范围。这个视角很有启发：大模型不是在真空里被评，而是在一个个具体场景里被检验。</p>
        <p>例如在医学里，模型可能需要回答医学查询、辅助考试、甚至模拟临床助手；在 Agent 场景里，重点就不再只是文本质量，而是规划、工具使用、检索和执行是否真的能闭环。</p>
        <div class="callout">
          <strong>一个值得记住的转变：</strong>传统模型评测更像“测单科成绩”，而大模型评测越来越像“看完整能力画像”。能力、稳定性、价值对齐和真实任务表现，必须一起看。
        </div>
      </section>
      <section id="sec-3">
        <h2>第二层：去哪评</h2>
        <p>当你知道该评什么之后，下一个问题就是：用什么地方、什么题、什么数据来评。这里讨论的是 datasets 和 benchmarks，也就是整个评测系统的地基。</p>
        <h3>通用 benchmark 解决的是“横向对比”</h3>
        <p>像 MMLU、HELM、BIG-bench、AGIEval 这种基准，价值在于能让大家在相对统一的设置下快速比较模型水平。它们像公共考场，方便形成社区共识。</p>
        <h3>垂直 benchmark 解决的是“能不能上真实场景”</h3>
        <p>一旦进入特定领域，通用题库就不够了。有不少面向法律、医学、工具使用、多轮对话、多模态和中文场景的 benchmark。它们更像岗位测试，而不是通识考试。</p>
        <div class="benchmarks">
          <div class="bench">
            <h4>通用能力</h4>
            <p>MMLU、HELM、BIG-bench 这类基准适合看综合语言与知识表现，也常被用作模型发布时的“基本盘”。</p>
          </div>
          <div class="bench">
            <h4>垂直任务</h4>
            <p>API-Bank、ToolBench、MultiMedQA、C-Eval 等更关注工具调用、医疗、中文考试或特定行业表现。</p>
          </div>
          <div class="bench">
            <h4>多模态与动态评测</h4>
            <p>MMBench、SEED-Bench、Chatbot Arena、DynaBench 等开始让评测更接近开放环境和持续演化场景。</p>
          </div>
        </div>
        <figure>
          <img src="${assets.llmEvalWhereBenchmarksImage}" alt="Where to evaluate benchmarks diagram" />
          <figcaption>“去哪评”的一个直观拆分：通用 benchmark 适合横向比较，垂直 benchmark 更贴近真实场景和具体任务。</figcaption>
        </figure>
        <h3>问题也正出在这里</h3>
        <p>有一个很重要的提醒是：公开、静态 benchmark 在大模型时代会越来越不够用。因为模型参数更大、训练语料更广，数据污染和 benchmark 记忆的风险会持续上升。题库一旦被“看过”，高分就未必代表真能力。</p>
        <p>这也是为什么动态评测越来越受关注。与其重复考同一套题，不如让评测数据随着模型演化一起更新，甚至把人在回路中的新样本、对抗样本和真实交互数据纳入进来。</p>
      </section>
      <section id="sec-4">
        <h2>第三层：怎么评</h2>
        <p>这里把评测方法大体分成两类：自动评测和人工评测。这个划分很经典，但在 LLM 时代，它的边界也在变。</p>
        <h3>自动评测：快、标准化，但容易失真</h3>
        <p>自动评测的优点显而易见：便宜、可复现、能批量跑。常见指标包括准确率、Exact Match、F1、ROUGE，也包括校准、公平性和鲁棒性指标。问题在于，这些分数只对一部分任务有效。</p>
        <pre><code>常见自动评测维度

1. Accuracy：答案对不对
2. Calibration：模型有多自知
3. Fairness：不同群体上是否一致
4. Robustness：输入变化后性能掉多少</code></pre>
        <p>比如摘要写得像不像人、对话是不是自然、有没有细微事实错误，这些事情只靠 ROUGE 往往看不全。于是新的自动评测开始出现，比如用另一个 LLM 当评委，或者做更复杂的多维打分。</p>
        <h3>人工评测：更接近真实体验，但成本高、主观性强</h3>
        <p>人工评测能看到自动指标看不到的东西，比如帮助性、自然度、可读性、危险性、价值冲突、风格适配等。问题是它贵、慢，而且不同标注者之间很难完全一致。</p>
        <table>
          <thead>
            <tr>
              <th>方式</th>
              <th>优势</th>
              <th>局限</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>自动评测</td>
              <td>便于批量比较、可复现、速度快</td>
              <td>容易忽略细腻质量，可能被指标“带偏”</td>
            </tr>
            <tr>
              <td>人工评测</td>
              <td>贴近真实用户体验，能看复杂维度</td>
              <td>成本高、一致性差、规模受限</td>
            </tr>
            <tr>
              <td>LLM-as-a-Judge</td>
              <td>介于两者之间，扩展性强</td>
              <td>评委模型本身也会带偏见和盲点</td>
            </tr>
          </tbody>
        </table>
        <p>从今天的趋势看，未来不会是谁完全替代谁，而是混合方案变成常态：先用自动指标做大规模筛查，再用人工或高质量 judge 模型做精细复核。</p>
      </section>
      <section id="sec-5">
        <h2>我们能看清什么</h2>
        <h3>大模型已经做得不错的地方</h3>
        <ul>
          <li>在很多通用语言任务上，LLM 已经具备很强的零样本和少样本迁移能力。</li>
          <li>在写作、摘要、问答、翻译和一部分专业考试类任务中，它们已经展现出明显实用价值。</li>
          <li>多任务统一建模让过去分散的 NLP 能力开始汇合到一个模型里。</li>
        </ul>
        <h3>但真正的短板也很稳定</h3>
        <ul>
          <li>推理仍然不稳，尤其是复杂逻辑链、多步数学和需要严格验证的问题。</li>
          <li>鲁棒性不足，同义改写、对抗提示和分布外输入都可能让结果波动明显。</li>
          <li>事实性与可信度仍是硬伤，模型会生成看起来流畅但实际错误的答案。</li>
          <li>在安全敏感领域，单看高分并不等于可以直接部署。</li>
        </ul>
        <div class="callout">
          <strong>最重要的信号：</strong>评测不应该只服务于“发布时比一比”，更应该服务于“研发时发现问题、部署前控制风险、上线后持续纠偏”。
        </div>
      </section>
      <section id="sec-6">
        <h2>下一代大模型评测，难点会在哪里</h2>
        <p>未来挑战可以分成七个方向。我把它们压缩成几句更直白的话，会更像我们今天真的会碰到的问题。</p>
        <h3>1. 怎么设计更像 AGI 的 benchmark</h3>
        <p>如果模型越来越通用，单学科题库就不够了。未来的 benchmark 可能要同时吸收教育、心理学、社会科学甚至行为科学的视角。</p>
        <h3>2. 怎么做“完整行为评测”</h3>
        <p>评模型不能永远停留在答题纸上。对机器人、Agent、多模态系统来说，开放环境中的行为结果可能比一题一分更重要。</p>
        <h3>3. 怎么让评测也跟着模型一起演化</h3>
        <p>静态题库很容易过时，也容易被训练数据污染。动态、持续更新、能自动生长的评测系统，几乎会成为必选项。</p>
        <h3>4. 怎么评“真正可信”</h3>
        <p>不仅模型要可信，评测本身也要可信。测试集是否干净、指标是否合理、judge 是否偏置，这些都会反过来影响我们对模型的判断。</p>
        <h3>5. 怎么把不同任务纳入统一框架</h3>
        <p>安全、价值对齐、工具调用、多模态、代码、医学、Agent，这些能力越来越难靠一套统一分数概括。未来更像是统一框架下的多视角评测，而不是单榜单统治一切。</p>
        <p>所以，如果用一句话收束这篇综述，它真正想表达的不是“现在有哪些 benchmark”，而是：<strong>评测本身已经从模型研发的配角，变成了大模型时代的基础设施。</strong></p>
      </section>
      <section>
        <h2>延伸阅读</h2>
        <ol class="sources">
          <li><a href="https://arxiv.org/abs/2307.03109">A Survey on Evaluation of Large Language Models</a></li>
          <li><a href="https://github.com/MLGroupJLU/LLM-eval-survey">论文配套开源仓库</a></li>
          <li><a href="https://crfm.stanford.edu/helm/latest/">HELM</a></li>
          <li><a href="https://github.com/openai/evals">OpenAI Evals</a></li>
          <li><a href="https://lmarena.ai/">Chatbot Arena</a></li>
        </ol>
      </section>
    `,
    sections: [],
    sideTitle: "",
    sideBullets: [],
    sideBody: ""
  },
  {
    slug: "rag-knowledge-systems",
    index: "LEARNING NOTE 02 · RAG & KNOWLEDGE ENHANCEMENT",
    category: "RAG",
    title: "RAG 与知识增强",
    cardSummary:
      "不是把模型接上向量库就结束了，而是要把召回、证据筛选、生成、验证和反馈一起看成系统问题。",
    heroTitle: "RAG 与知识增强",
    heroSummary:
      "这篇笔记写的是我目前对 RAG 的一个基本判断：真正可用的知识增强系统，不是把模型接上向量库就结束了，而是要把检索、证据选择、生成、验证和反馈当成同一条链路来设计。",
    tags: ["BM25", "Dense Retrieval", "Hybrid Retrieval", "Rerank", "Faithfulness"],
    thumb: assets.noteRagImage,
    sections: [
      {
        title: "1. 为什么我会把 RAG 看成“系统问题”",
        paragraphs: [
          "最开始接触 RAG 时，很容易把它理解成一条很直接的管线：提问、检索、拼接上下文、生成答案。但一旦真的开始做项目，就会发现它最难的地方并不是链路能否跑通，而是检索回来的内容到底能不能支撑一个可信答案。",
          "所以在我看来，RAG 本质上更接近一个系统问题。它同时涉及召回覆盖、证据质量、生成忠实性、知识更新和反馈回流，而不是只追求“回答看起来挺顺”的表面效果。"
        ]
      },
      {
        title: "2. 一条典型 RAG 链路由什么构成",
        bullets: [
          "文档整理与切分：决定知识会以什么粒度进入系统。",
          "Embedding 与索引：决定向量检索的语义表示能力。",
          "召回：通常包括稠密检索、BM25 或混合检索。",
          "重排序：从“可能相关”里筛出“最能支撑答案”的证据。",
          "生成：让 LLM 基于证据进行回答，而不是自由发挥。",
          "验证与反馈：检查答案是否忠实，并为后续优化提供回流数据。"
        ],
        paragraphs: [
          "这条链路里没有哪一步是“中性的”。每一层都可能引入误差，所以我现在更倾向于把 RAG 当作一条可以被测量、被调试、被迭代的流水线来看。"
        ]
      },
      {
        title: "3. Hybrid Retrieval 为什么重要",
        paragraphs: [
          "单一的 dense retrieval 对语义相似很敏感，但面对实体名、术语、编号或者非常精确的事实描述时，并不总是稳定。BM25 则恰好在这类词面信号上更有优势。",
          "所以 Hybrid Retrieval 对我来说并不只是增强项，而是提高召回覆盖面的一种基本策略。它的意义就在于，不把所有召回能力押在单一检索机制上。"
        ]
      },
      {
        title: "4. Rerank 决定了证据能不能真正被用上",
        paragraphs: [
          "现在回头看，很多表面上像“模型回答不好”的问题，最后其实都能追到 rerank。检索阶段只能告诉我们“哪些片段可能相关”，但 rerank 才真正决定“哪些片段值得被模型看到”。",
          "这一步的价值，在于把“召回得多”转化成“上下文够准”。没有这一步，模型很容易在一堆看起来都差不多的片段里被噪声带偏。"
        ]
      },
      {
        title: "5. 我最关心的不是回答流畅，而是 Faithfulness",
        paragraphs: [
          "RAG 系统最危险的一点，就是它很容易“答得很像回事”。但看起来像回事，不代表它真的在依据检索到的证据回答。所以我现在会特别关注 Faithfulness，也就是结论能否被上下文真正支撑。"
        ],
        bullets: [
          "是否引用了真正相关的证据。",
          "是否把证据过度延伸成了原文没有表达的结论。",
          "是否在上下文不足时仍然强行回答。"
        ],
        paragraphsAfter: ["对我来说，这一层几乎决定了一个系统是否真的配得上“知识增强”这个名字。"]
      },
      {
        title: "6. Query Rewrite 和反馈回路会让系统更像“活的”",
        paragraphs: [
          "很多检索失败并不是因为模型太弱，而是原始问题本身就不适合直接拿去检索。Query Rewrite 的意义，在于先把问题变成检索系统更容易处理的形式。",
          "再往前走一步，如果系统能持续记录失败查询、证据命中情况和用户不满意的回答，它就开始拥有真正的反馈回路，而不再只是一次性的静态管线。"
        ]
      },
      {
        title: "7. 我自己的项目启发",
        paragraphs: [
          "做医疗知识库 RAG 系统时，我一个很直接的感受是：很多所谓“回答质量问题”，最后都能追溯到更前面的工程设计。问题可能出在 chunk 太碎、召回不稳、rerank 不准，也可能只是 prompt 没有把“基于证据回答”说清楚。",
          "这让我慢慢形成一个很朴素的判断标准：做 RAG 时，先别急着比较模型，先看检索链路有没有被认真搭好。"
        ]
      },
      {
        title: "8. 我现在会怎么设计一个更稳的 RAG 系统",
        bullets: [
          "优先明确知识来源、更新频率和证据粒度。",
          "召回阶段尽量采用 Hybrid Retrieval，而不是单通道检索。",
          "把 rerank 当核心组件，而不是可有可无的增强项。",
          "在生成阶段加入引用、拒答与证据不足提示。",
          "对系统持续记录失败查询、证据选择和用户反馈。"
        ]
      }
    ],
    sideTitle: "我会继续补充的部分",
    sideBullets: [
      "不同 chunk 策略对召回质量的影响。",
      "面向事实问答与开放问答的不同评测方式。",
      "RAG 与 Agent 结合时的检索规划与验证机制。"
    ],
    sideBody:
      "这篇笔记后续还会继续延展成一份更工程化的 RAG 调优清单，帮助我自己把知识增强系统从原型推进到更稳的应用层。"
  },
  {
    slug: "multi-agent-frameworks",
    index: "LEARNING NOTE 03 · MULTI-AGENT FRAMEWORKS",
    category: "AGENT",
    title: "多 Agent 进化论：从 API 到智能体",
    cardSummary:
      "多 Agent 什么时候真的必要，角色怎么拆，系统怎样保持可观测、可回退、可控成本。",
    heroTitle: "多 Agent 框架：从大模型接口到可落地协作系统",
    heroSummary:
      "这篇文章试着把一条很热、也很容易被说复杂的技术路线讲清楚：我们为什么会从聊天式大模型一路走到 Agent，又为什么会继续走向多 Agent 协作、框架化开发，以及像 Manus 这类更接近“能真正干活”的系统。",
    tags: ["LLM Agent", "Agents SDK", "Group Chat", "Handoffs", "PC Agent"],
    thumb: assets.noteMultiAgentImage,
    articleHtml: `
      <header class="note-source-hero">
        <p class="eyebrow">LEARNING NOTE 03 · MULTI-AGENT FRAMEWORKS</p>
        <h1>Agent 进化论：从大模型 API 到可落地智能体</h1>
        <p class="dek">这篇文章试着把一条很热、也很容易被说复杂的技术路线讲清楚：我们为什么会从聊天式大模型一路走到 Agent，又为什么会继续走向多 Agent 协作、框架化开发，以及像 Manus 这类更接近“能真正干活”的系统。</p>
      </header>
      <nav class="toc" aria-label="目录">
        <strong>目录</strong>
        <ol>
          <li><a href="#sec-1">从 LLM 到 LLM Agent：能力边界是怎么被推开的</a></li>
          <li><a href="#sec-2">为什么 Agent 框架会集中冒出来</a></li>
          <li><a href="#sec-3">多 Agent 到底该怎么协作</a></li>
          <li><a href="#sec-4">开箱即用的 Agent，已经能做到什么程度</a></li>
          <li><a href="#sec-5">如果手撸一个类 Manus 的 PC Agent，需要哪些模块</a></li>
        </ol>
      </nav>
      <section id="sec-1">
        <h2>一、从 LLM 到 LLM Agent：能力边界是怎么被推开的</h2>
        <p class="lead">今天大家提到“大模型”，通常指的是大语言模型，也就是 LLM。它真正改变软件形态的地方，不只是会聊天，而是让自然语言开始成为一种可编程接口。</p>
        <p>传统 AI 更像针对单点任务训练出来的专用工具，识别、分类、推荐，各有各的边界。LLM 不一样，它依赖海量参数和训练数据，在语言理解、归纳、推理和生成上出现了明显的“通用化”趋势。也正因为如此，它不再只是一个模型，而逐渐变成了新的软件底座。</p>
        <h3>从聊天窗口，到开发接口</h3>
        <p>最早，普通用户和大模型交互的方式就是网页或 App 中的对话框。对开发者来说，真正的分水岭是模型能力被 API 化。重点有两种典型接口：Chat Completions API 和 Assistants API。前者更轻、更直接，后者更像是在给模型补齐“记忆、工具和执行流程”。</p>
        <table>
          <thead>
            <tr>
              <th>维度</th>
              <th>Chat Completions API</th>
              <th>Assistants API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>核心定位</td>
              <td>把模型当成无状态对话接口来调用</td>
              <td>把模型放进可持续运行的助手机制里</td>
            </tr>
            <tr>
              <td>上下文管理</td>
              <td>每次请求自己带完整上下文</td>
              <td>通过线程、消息和运行过程管理上下文</td>
            </tr>
            <tr>
              <td>扩展能力</td>
              <td>适合问答、摘要、简单生成</td>
              <td>适合工具调用、文件处理、多轮任务</td>
            </tr>
            <tr>
              <td>开发体验</td>
              <td>上手快，控制直接</td>
              <td>抽象更多，能力更强，但复杂度也更高</td>
            </tr>
          </tbody>
        </table>
        <p>如果把它们放在一起看，区别就很清楚了。Chat Completions 更像一个“会说话的模型函数”；Assistants 则开始向“可执行任务的系统”靠近。也正是从这里开始，Agent 的影子出现了。</p>
        <pre><code>from openai import OpenAI

client = OpenAI()
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "写一个关于独角兽的睡前故事"}
    ]
)

print(completion.choices[0].message.content)</code></pre>
        <figure>
          <img src="${assets.agentCoreStackImage}" alt="LLM Agent core stack" />
          <figcaption>LLM Agent 的核心能力结构：在底层模型之上，逐步补上记忆、规划能力和工具使用。</figcaption>
        </figure>
        <h3>真正的变化，不只是“能回答”，而是“能做事”</h3>
        <p>当模型能保留上下文、调用工具、读写文件、触发函数时，开发者面对的就不再只是一次问答请求，而是一个带有状态和执行能力的系统。LLM Agent 的核心拆成了四个关键词：<strong>模型</strong>、<strong>记忆</strong>、<strong>规划</strong>、<strong>工具使用</strong>。这四件事组合在一起，模型就从“回答机器”变成了“任务执行者”。</p>
        <p>比如让一个 Agent 写市场分析报告，它不会只吐一段结论，而是会先拆任务，再查资料、拉数据、做图表、整合结果。这个过程里，模型负责理解与推理，记忆负责存状态，规划负责拆步骤，工具负责落地执行。</p>
        <div class="note">
          <strong>MCP 为什么重要：</strong>Model Context Protocol 为 Agent 生态里很关键的一块基础设施。它想解决的是模型怎样以统一方式接入外部资源和工具，让“接设备、接数据、接系统”不再是一次次重复定制。
        </div>
      </section>
      <section id="sec-2">
        <h2>二、为什么 Agent 框架会集中冒出来</h2>
        <p>单个 Agent 看起来已经很强了，但一旦任务变复杂，问题就会暴露出来。一个智能体既要理解需求、规划步骤、调用工具、处理中间状态，还要根据结果反思纠错，很容易“大脑过载”。这也是为什么系统会从单 Agent 逐步走向多 Agent。</p>
        <p>有一个很贴切的类比：现实里复杂工作靠团队完成，软件里的复杂任务也一样。把任务拆给不同角色去做，往往比把所有能力都压到一个 Agent 身上更稳定。问题是，多 Agent 一旦真的落地，开发复杂度会迅速上升，于是框架就成了刚需。</p>
        <h3>LangChain 和 LangGraph：把调用链做成工程系统</h3>
        <p>LangChain 最早吸引开发者的地方，是它把“检索、记忆、工具、流程控制”模块化了。你不需要从零发明所有轮子，而是能把常见能力像积木一样接起来。到了 LangGraph，这种能力更进一步，从链式调用升级为图结构编排，让循环、分支、回退和状态流转都更容易表达。</p>
        <p>对开发者来说，LangGraph 的意义不只是“更高级”，而是它更接近真实业务流程。一个旅行助手为什么能在目的地推荐、酒店推荐和用户确认之间来回切换？因为背后不再是线性调用，而是带状态的图结构系统。</p>
        <h3>Swarm、Agents SDK、AutoGen：把多智能体变得更可控</h3>
        <p>还存在另一条路线，是 OpenAI Swarm 到 Agents SDK 的演进，以及微软 AutoGen 的多智能体实践。它们共同解决的问题，其实都很现实：</p>
        <ul>
          <li>如何定义多个 Agent 的角色边界。</li>
          <li>如何在 Agent 之间做任务转交。</li>
          <li>如何观察执行链路，定位哪一步出了错。</li>
          <li>如何把普通函数、安全校验和工具接入到统一运行时里。</li>
        </ul>
        <p>这类框架的价值，不在于“Agent 概念更酷”，而在于它们把协作机制、消息传递、调试追踪和工具接入变成了可复用的工程能力。换句话说，框架不是替你发明产品，而是把你从大量重复的底层搭建里解放出来。</p>
      </section>
      <section id="sec-3">
        <h2>三、多 Agent 到底该怎么协作</h2>
        <p>讲多 Agent，如果只停留在“大家分工合作”这个层面，其实没什么信息量。真正影响效果的，是协作模式怎么设计。我们可以把它压缩成三种最常见的组织方式。</p>
        <h3>1. 顺序工作流：任务天然有前后依赖</h3>
        <p>最简单的模式是顺序流。比如客服场景里，先检索资料，再撰写回复，最后校对。每个 Agent 只负责一个固定步骤，前一个的输出就是后一个的输入。这样的设计稳定、好测、适合确定性流程。</p>
        <h3>2. Group Chat：任务需要多轮讨论和反复返工</h3>
        <p>如果任务没有严格顺序，而是更像团队讨论，比如写一篇图文并茂的营销文案，那么群聊式协作就更合适。文案 Agent 先写初稿，美工 Agent 产图，主管 Agent 负责点评和打回重做，系统再决定下一轮该由谁继续发言。</p>
        <p>这类模式的关键不是“大家都能说话”，而是必须有一个明确的管理者来控节奏。有 Round Robin、Selector 和 Magentic-One 这类变体，本质上都在解决一个问题：什么时候轮到谁，以及谁来决定下一步。</p>
        <figure>
          <img src="${assets.agentGroupChatImage}" alt="Group chat multi-agent architecture" />
          <figcaption>Group Chat 协作模式：通过管理者控制轮次与消息流转，让多个角色围绕同一任务持续协作。</figcaption>
        </figure>
        <h3>3. Handoffs：前台分流，后台接力</h3>
        <p>还有一种很实用的模式，是任务委派。比如一个客户服务入口同时处理退款、销售咨询和投诉升级，用户先跟分流 Agent 说需求，再被转交给退款 Agent、销售 Agent 或人工节点。它不像顺序流那样固定，也不像群聊那样所有人都在一个频道里，而是更接近现实公司中的“前台分单”。</p>
        <p>这种模式特别适合业务边界清晰、角色职责明确的系统。它要求每个 Agent 不只知道自己能做什么，还要知道自己<strong>不能</strong>做什么，并在必要时把任务交回或转出。</p>
        <figure>
          <img src="${assets.agentHandoffsImage}" alt="Handoff-based agent routing architecture" />
          <figcaption>Handoffs 模式：先由分流 Agent 理解需求，再把请求转交给更合适的专门角色或人工节点。</figcaption>
        </figure>
        <figure>
          <img src="${assets.agentSequenceExampleImage}" alt="Handoff conversation sequence example" />
          <figcaption>一次具体的转交流程示意：从用户诉求到退款、回流分诊、再升级人工，完整体现多 Agent 的业务链路。</figcaption>
        </figure>
        <div class="note">
          <strong>进阶模式：</strong> MoA（Mixture of Agents）和 MAD（Multi-Agent Debate）。前者像多层前馈网络，把不同层的结果逐步汇总；后者像让多个解题者相互辩论，再由聚合者做最终裁决。这些模式更适合提升复杂推理质量，而不是日常业务编排。
        </div>
      </section>
      <section id="sec-4">
        <h2>四、开箱即用的 Agent，已经能做到什么程度</h2>
        <p>过去做 Agent，很多团队得自己搭角色、自己配工具、自己写调度。现在不少框架已经直接提供内置 Agent、预定义工具和常见模式封装，开发方式更像“搭系统”而不是“造底盘”。</p>
        <p><strong>ReAct</strong>、<strong>LLM Compiler</strong>、<strong>Storm</strong>。它们分别代表了不同的能力取向：有的强调推理与行动交替，有的强调多函数并行调度，有的强调从提纲到成稿的逐层展开。你可以把它们理解成 Agent 系统里常见的“工作模板”。</p>
        <p>这意味着，今天做一个实际可用的 Agent，已经不一定要从最底层开始写。很多时候，你只需要选好模型、设定角色、接入工具，再根据业务流程做少量定制，就能拼出第一版系统。比如一个浏览器自动操作 Agent，往往只要补齐网页访问、截图、点击和状态判断这些能力，就可以跑通不少场景。</p>
      </section>
      <section id="sec-5">
        <h2>五、如果手撸一个类 Manus 的 PC Agent，需要哪些模块</h2>
        <p>怎么做一个“类 Manus”的 PC Agent。它的核心判断很直接：如果 Agent 想跳出单纯调用 API 的边界，就迟早要走向 GUI，也就是图形界面操作。</p>
        <p>原因不难理解。现实软件世界并不是每个功能都开放了结构化 API。很多系统、桌面工具、内部平台，真正可用的入口就是按钮、菜单、输入框和窗口切换。一个能理解 GUI、还能动手操作 GUI 的 Agent，天然就拥有跨软件工作的潜力。</p>
        <h3>PC Agent 的五个基础模块</h3>
        <ul>
          <li><strong>环境感知：</strong>获取截图、控件树、界面属性，理解当前屏幕发生了什么。</li>
          <li><strong>提示工程：</strong>把用户目标、系统规则、环境状态、历史动作整合成可供模型推理的上下文。</li>
          <li><strong>模型推理：</strong>把大任务拆成计划，并产出下一步可执行动作。</li>
          <li><strong>行动执行：</strong>把点击、输入、快捷键、API 调用等动作真正落到系统里。</li>
          <li><strong>持续记忆：</strong>保存历史步骤、结果反馈、阶段状态和长期经验，避免系统“一步一失忆”。</li>
        </ul>
        <p>如果再往前走一步，系统还需要反思能力和反馈闭环。因为 GUI 场景最麻烦的地方不是“不会点”，而是界面变动、状态不稳定、错误恢复困难。一个真正可用的 PC Agent，必须能在执行后检查结果，不对就回退、重试或改计划。</p>
        <pre><code>{
  "goal": "在浏览器中完成资料检索并整理为文档",
  "environment": {
    "active_app": "Browser",
    "visible_elements": ["search_box", "tab_bar", "download_button"]
  },
  "plan": [
    "搜索目标资料",
    "打开可信来源",
    "提取关键信息",
    "整理为结构化摘要"
  ],
  "next_action": {
    "tool": "click",
    "target": "search_box"
  }
}</code></pre>
        <h3>GUI 感知是下限，记忆和恢复决定上限</h3>
        <p> OmniParser 这类方案，强调的是多阶段 GUI 解析能力，包括图标检测、OCR 和界面元素语义描述。这个方向的意义在于，把“屏幕像素”变成“结构化界面”。只有这样，Agent 才能知道自己看到的是按钮、标签、输入框，还是一段普通文本。</p>
        <p>再往后延伸，PC Agent 只是起点。Web Agent 关注浏览器内的任务流，Mobile Agent 则要处理触摸操作、应用切换、系统兼容和隐私问题。也就是说，类 Manus 系统真正有意思的地方，不只是替你点几下鼠标，而是它在尝试把“操作系统之上的工作流”重新包装成由 Agent 驱动的服务层。</p>
        <p>从这个角度看，Agent 的演进路线其实很清楚：先有会说话的模型，再有可调用的 API，然后有带记忆和工具的执行系统，接着是多智能体协作，最后才是像 Manus 这样更接近产品形态的通用工作代理。删掉那些热点追逐和概念堆叠后，真正值得关注的仍然是这条主线本身。</p>
      </section>
      <section>
        <h2>延伸阅读</h2>
        <ol class="sources">
          <li><a href="https://platform.openai.com/docs">OpenAI Platform Docs</a></li>
          <li><a href="https://openai.github.io/openai-agents-python/">OpenAI Agents SDK</a></li>
          <li><a href="https://www.langchain.com.cn/docs/introduction/">LangChain 文档</a></li>
          <li><a href="https://github.com/langchain-ai/langgraph">LangGraph</a></li>
          <li><a href="https://microsoft.github.io/autogen/stable/user-guide/core-user-guide/index.html">AutoGen 文档</a></li>
          <li><a href="https://github.com/openai/swarm">OpenAI Swarm</a></li>
          <li><a href="https://arxiv.org/abs/2411.18279">Magentic-One 论文</a></li>
          <li><a href="https://gist.github.com/jlia0/db0a9695b3ca7609c9b1a08dcbf872c9">Manus 相关公开材料</a></li>
        </ol>
      </section>
    `,
    sections: [],
    sideTitle: "",
    sideBullets: [],
    sideBody: ""
  },
  {
    slug: "control-systems",
    index: "LEARNING NOTE 04 · CONTROL & SYSTEMS",
    category: "SYSTEMS",
    title: "控制与系统工程",
    cardSummary:
      "从 PID、MPC 到编译原理、操作系统和网络协议，记录支撑可部署 AI 系统的基础能力。",
    heroTitle: "控制与系统工程",
    heroSummary:
      "这一页先作为学习索引保留。后面我会把控制理论、操作系统、编译原理和网络协议之间的联系慢慢写清楚，尤其是它们怎样一起支撑可部署的 AI 系统。",
    tags: ["PID", "MPC", "Compiler", "OS", "Network"],
    thumb: assets.noteRagImage,
    sections: [
      {
        title: "写作计划",
        paragraphs: [
          "这一部分还在继续整理。我希望不是简单按课程目录抄一遍，而是把它们放回我关心的系统问题里去理解：为什么控制论会影响我看待反馈，为什么操作系统和网络基础会影响 Agent 系统的稳定性，为什么编译原理会影响我理解程序结构和执行路径。"
        ]
      }
    ],
    sideTitle: "准备补充的主题",
    sideBullets: ["PID 与 MPC", "编译原理基础", "操作系统核心机制", "网络协议与服务通信"],
    sideBody: "这部分后面会继续展开成更系统的技术笔记。"
  }
];
