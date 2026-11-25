import {EXPLANATIONS as EN_EXPLANATIONS,SYSTEMS,type SystemId,type View} from './anatomy';
import {NAMES_ZH} from './data/names-zh';

export type Lang = 'zh' | 'en';

const ZH_SYSTEMS: Record<SystemId, {name:string;description:string}> = {
 skeletal:{name:'骨骼',description:'骨骼构成身体的支撑框架，保护内脏，并为肌肉提供附着点。骨内部组织还储存矿物质并生成血细胞。'},
 muscular:{name:'肌肉',description:'骨骼肌通过牵拉附着点产生运动。它们与肌腱协同工作，带动关节活动、稳定姿态并产生热量。'},
 cardiac:{name:'心脏',description:'心脏是一个具有四个腔室的肌肉泵。心脏瓣膜引导血液沿肺循环和体循环向前流动。'},
 sensory:{name:'感觉器官',description:'这些结构参与视觉、听觉和平衡等特殊感觉。其特化组织负责检测刺激，并与神经系统协同传递信息。'},
 arterial:{name:'动脉',description:'心脏驱动血液在循环系统中流动。动脉将血液从心脏输送至各组织，在肺循环中则将血液送往肺部。'},
 venous:{name:'静脉',description:'静脉将血液送回心脏。浅静脉和深静脉网络从组织收集血液；肺静脉将含氧血液从肺部带回。'},
 nervous:{name:'神经系统',description:'脑、脊髓和周围神经负责传递和处理信号，支持感觉、运动、协调以及对身体功能的自动调节。'},
 respiratory:{name:'呼吸系统',description:'气道将空气输送到肺部，氧气和二氧化碳在此于空气与血液之间交换。呼吸依赖呼吸肌产生的压力变化。'},
 digestive:{name:'消化系统',description:'消化道分解食物、吸收营养和水分，并将废物继续向下输送。附属器官提供胆汁和消化酶。'},
 urinary:{name:'泌尿系统',description:'肾脏过滤血液并调节体液、电解质和酸碱平衡。尿液经输尿管进入膀胱，再通过尿道排出。'},
 lymphatic:{name:'淋巴系统',description:'淋巴管将多余的组织液送回循环系统。淋巴结和其他淋巴器官参与免疫监视与免疫反应。'},
 endocrine:{name:'内分泌系统',description:'内分泌器官将激素释放到血液中，协调代谢、生长、应激反应和生殖等过程。'},
 reproductive:{name:'生殖系统',description:'此处展示的男性生殖结构参与精子的生成、成熟、运输以及性激素的产生。'},
 integumentary:{name:'体表',description:'体表提供了外部解剖参照。皮肤系统形成保护屏障，并参与感觉和体温调节。'},
 connective:{name:'结缔组织',description:'软骨、韧带和其他结缔组织支撑、连接并分隔结构。它们的作用包括稳定关节和分散机械负荷。'},
};

const ZH_EXPLANATIONS: Record<string,string> = {
 heart:'位于胸腔的肌肉泵。右侧将血液送往肺部，左侧将血液送入体循环。',
 liver:'位于右侧膈下的大型器官。它处理吸收的营养物质、生成胆汁，并合成多种随血液运输的蛋白质。',
 brain:'神经系统的中枢器官。其相互连接的区域支持感知、运动、记忆、语言以及身体功能的调节。',
 stomach:'位于食管与小肠之间的肌肉性腔器。它储存食物，并用酸和酶将其混合后送入十二指肠。',
 spleen:'位于左上腹的淋巴器官。它过滤血液、清除衰老的血细胞，并参与免疫反应。',
 pancreas:'兼具消化和内分泌功能的腹部器官。它向小肠提供消化酶，并释放胰岛素和胰高血糖素等激素。',
 'urinary bladder':'位于骨盆内的肌肉性储尿器官，储存经输尿管来自肾脏的尿液。',
 trachea:'连接喉与支气管的主要气道。其软骨支撑使气道在呼吸时保持通畅。',
 diaphragm:'分隔胸腔与腹腔的宽阔肌肉。收缩时它增大胸腔容积，帮助将空气吸入肺部。',
};

// 数据集中的结构名称是英文，中文模式下使用完整对照表（见 data/names-zh.ts）。
export function conceptName(name:string,lang:Lang){
 return lang==='zh' ? (NAMES_ZH[name.toLowerCase()] ?? name) : name;
}

export function systemName(id:SystemId,lang:Lang){
 return lang==='zh' ? ZH_SYSTEMS[id].name : (SYSTEMS.find(s=>s.id===id)?.name ?? id);
}

export function hasExplanation(name:string,lang:Lang){
 return !!(lang==='zh' ? ZH_EXPLANATIONS[name.toLowerCase()] : EN_EXPLANATIONS[name.toLowerCase()]);
}

export function explanation(name:string,system:SystemId,lang:Lang){
 if(lang==='zh')return ZH_EXPLANATIONS[name.toLowerCase()] ?? ZH_SYSTEMS[system]?.description ?? '';
 return EN_EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';
}

export interface Copy {
 eyebrow:string;title:string;pieceUnit:string;pieceOne:string;anatomyFallback:string;
 searchLabel:string;searchAria:string;panelsAria:string;
 systems:string;closeSystems:string;all:string;skeleton:string;organs:string;layersAria:string;closeLabel:string;
 showOnly:(name:string)=>string;showSystem:(name:string)=>string;piecesVisible:(n:string)=>string;hideAll:string;showAll:string;
 findStructure:string;findAria:string;closeSearch:string;searchPlaceholder:string;searchInputAria:string;noMatch:string;
 searchNote:string;searchNoteQuery:string;
 cameraAria:string;views:Record<View,string>;viewGlyphs:Record<View,string>;autoRotate:string;pauseRotation:string;rotateBody:string;reset:string;resetTitle:string;
 captionSelected:string;captionInventory:string;captionSeparated:string;captionDefault:string;catalogueError:string;
 explode:string;assembleReset:string;
 dragPan:string;dragOrbit:string;pinchZoom:string;tapInspect:string;sourceCredits:string;
 preparing:string;loading:string;reload:string;
 contextNote:string;atlasReference:string;selectedPieces:string;includedStructures:string;andMore:(n:string)=>string;
 viewSource:string;isolate:string;showSurrounding:string;clearSelection:string;
 aboutEyebrow:string;aboutTitle:string;aboutDescription:string;aboutLead:string;aboutLeadDetail:string;
 aboutBody1:string;aboutBody2:string;aboutSourceHeading:string;aboutSource:string;
 licenseLink:string;geometryLink:string;publicationLink:string;
 langToggle:string;langToggleAria:string;langToggleTitle:string;
}

const zh:Copy = {
 eyebrow:'交互式人体解剖',title:'人体图谱',pieceUnit:'个部件',pieceOne:'个部件',anatomyFallback:'人体解剖',
 searchLabel:'查找结构',searchAria:'搜索解剖结构',panelsAria:'浏览面板',
 systems:'系统',closeSystems:'关闭系统面板',all:'全部',skeleton:'骨骼',organs:'器官',layersAria:'解剖系统',closeLabel:'关闭',
 showOnly:name=>`仅显示${name}`,showSystem:name=>`显示${name}`,piecesVisible:n=>`可见 ${n} 个部件`,hideAll:'全部隐藏',showAll:'全部显示',
 findStructure:'查找结构',findAria:'查找解剖结构',closeSearch:'关闭搜索',searchPlaceholder:'心脏、股骨、脑神经…',searchInputAria:'搜索具名解剖结构',noMatch:'没有匹配的结构。',
 searchNote:'从主要器官开始，或搜索任意具名结构。',searchNoteQuery:'最多显示 80 条结果，输入更精确的名称可查找更小的结构。',
 cameraAria:'视角控制',
 views:{'three-quarter':'四分之三视角',front:'正面视角',side:'侧面视角',back:'背面视角'},
 viewGlyphs:{'three-quarter':'¾',front:'正',side:'侧',back:'背'},
 autoRotate:'自动旋转',pauseRotation:'暂停旋转',rotateBody:'旋转人体',reset:'重置',resetTitle:'重置',
 captionSelected:'已选结构',captionInventory:'解剖清单',captionSeparated:'分离部件',captionDefault:'成年人体 · 男性',catalogueError:'解剖目录加载失败。',
 explode:'拆解解剖结构',assembleReset:'组装并重置',
 dragPan:'拖动平移',dragOrbit:'拖动旋转',pinchZoom:'双指缩放',tapInspect:'点按查看',sourceCredits:'数据来源',
 preparing:'正在准备解剖模型',loading:'正在加载',reload:'重新加载',
 contextNote:'系统概述 · 结构名称来自原始解剖数据',atlasReference:'图谱编号',selectedPieces:'已选部件',includedStructures:'包含的结构',andMore:n=>`另有 ${n} 个建模部件。`,
 viewSource:'查看解剖数据来源',isolate:'单独显示该结构',showSurrounding:'显示周围结构',clearSelection:'清除选择',
 aboutEyebrow:'来源与范围',aboutTitle:'人体，层层展开。',aboutDescription:'探索来自 BodyParts3D 的成年男性参考解剖模型。',aboutLead:'男性 · BodyParts3D',aboutLeadDetail:'来自成年男性参考解剖的 2,234 个独立网格和 3,432 个具名概念。',
 aboutBody1:'该参考模型并不包含人体的全部结构或变异。具名概念可能包含多个部件；每个源网格只渲染一次。',aboutBody2:'颜色与系统分组用于辅助探索。几何结构针对网页进行了简化，简短说明提供通用教育背景。本图谱为解剖参考，不用于诊断或外科手术。',
 aboutSourceHeading:'数据来源',aboutSource:'BodyParts3D，© 生命科学数据库中心，依据 CC Attribution 4.0 International 许可发布。',
 licenseLink:'数据集许可',geometryLink:'原始几何与元数据',publicationLink:'阅读原始论文',
 langToggle:'EN',langToggleAria:'切换到英文',langToggleTitle:'Switch to English',
};

const en:Copy = {
 eyebrow:'INTERACTIVE ANATOMY',title:'Human Atlas',pieceUnit:'modeled pieces',pieceOne:'modeled piece',anatomyFallback:'ANATOMY',
 searchLabel:'Find a structure',searchAria:'Search anatomy',panelsAria:'Explorer panels',
 systems:'Systems',closeSystems:'Close systems',all:'All',skeleton:'Skeleton',organs:'Organs',layersAria:'Anatomical layers',closeLabel:'Close',
 showOnly:name=>`Show only ${name.toLowerCase()}`,showSystem:name=>`Show ${name.toLowerCase()}`,piecesVisible:n=>`${n} pieces visible`,hideAll:'Hide all',showAll:'Show all',
 findStructure:'Find a structure',findAria:'Find anatomy',closeSearch:'Close search',searchPlaceholder:'Heart, femur, cranial nerve…',searchInputAria:'Search named anatomical structures',noMatch:'No structures match your search.',
 searchNote:'Start with a major organ, or search every named structure.',searchNoteQuery:'Showing up to 80 matches. Refine your search to find smaller structures.',
 cameraAria:'Camera controls',
 views:{'three-quarter':'three-quarter view',front:'front view',side:'side view',back:'back view'},
 viewGlyphs:{'three-quarter':'¾',front:'F',side:'S',back:'B'},
 autoRotate:'Auto rotate',pauseRotation:'Pause rotation',rotateBody:'Rotate body',reset:'Reset',resetTitle:'Reset',
 captionSelected:'SELECTED STRUCTURE',captionInventory:'ANATOMICAL INVENTORY',captionSeparated:'SEPARATED STRUCTURES',captionDefault:'ADULT HUMAN · MALE',catalogueError:'The anatomy catalogue could not be loaded.',
 explode:'Explode anatomy',assembleReset:'Assemble and reset',
 dragPan:'Drag to pan',dragOrbit:'Drag to orbit',pinchZoom:'Pinch to zoom',tapInspect:'Tap to inspect',sourceCredits:'Data source',
 preparing:'Preparing the anatomy',loading:'Loading',reload:'Reload viewer',
 contextNote:'System overview · structure identified from source anatomy',atlasReference:'Atlas reference',selectedPieces:'Selected pieces',includedStructures:'Included structures',andMore:n=>`And ${n} more modeled pieces.`,
 viewSource:'View anatomical source',isolate:'Isolate structure',showSurrounding:'Show surrounding anatomy',clearSelection:'Clear selection',
 aboutEyebrow:'SOURCE & SCOPE',aboutTitle:'A body, revealed.',aboutDescription:'Explore the adult male reference anatomy from BodyParts3D.',aboutLead:'Male · BodyParts3D',aboutLeadDetail:'2,234 individual meshes and 3,432 named concepts from an adult male reference anatomy.',
 aboutBody1:'This reference does not contain every human structure or variation. Named concepts can contain multiple pieces; each source mesh is rendered once.',aboutBody2:'Colors and system groupings are designed for exploration. The geometry is simplified for the web, and short explanations provide general educational context. This is an anatomical reference, not a diagnostic or surgical tool.',
 aboutSourceHeading:'Source',aboutSource:'BodyParts3D, © The Database Center for Life Science licensed under CC Attribution 4.0 International.',
 licenseLink:'Dataset license',geometryLink:'Original geometry & metadata',publicationLink:'Read the source publication',
 langToggle:'中文',langToggleAria:'切换到中文',langToggleTitle:'切换到中文',
};

export const copy: Record<Lang,Copy> = {zh,en};

export const SCENE_ARIA: Record<Lang,string> = {
 zh:'交互式人体解剖。拖动旋转，双指或滚轮缩放，点按结构查看详情。',
 en:'Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.',
};

export const SCENE_ERRORS: Record<Lang,{webgl:string;contextLost:string;load:string;assemble:string}> = {
 zh:{
  webgl:'此浏览器无法启动 3D 查看器，请使用支持 WebGL 的浏览器。',
  contextLost:'3D 会话已被设备暂停，请重新加载以继续。',
  load:'无法加载解剖模型。',
  assemble:'无法组装解剖几何体。',
 },
 en:{
  webgl:'This browser could not start the 3D viewer. Please try a browser with WebGL enabled.',
  contextLost:'The 3D session was paused by your device. Reload to continue.',
  load:'Could not load the anatomy.',
  assemble:'Could not assemble anatomy geometry.',
 },
};
