"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuditedSuperBlocks = exports.createFlatSuperBlockMap = exports.createSuperBlockMap = exports.notAuditedSuperBlocks = exports.superBlockOrder = exports.SuperBlockStages = exports.SuperBlocks = void 0;
const i18n_1 = require("../config/i18n");
// all superblocks
var SuperBlocks;
(function (SuperBlocks) {
    SuperBlocks["RespWebDesignNew"] = "2022/responsive-web-design";
    SuperBlocks["RespWebDesign"] = "responsive-web-design";
    SuperBlocks["JsAlgoDataStruct"] = "javascript-algorithms-and-data-structures";
    SuperBlocks["JsAlgoDataStructNew"] = "javascript-algorithms-and-data-structures-v8";
    SuperBlocks["FrontEndDevLibs"] = "front-end-development-libraries";
    SuperBlocks["DataVis"] = "data-visualization";
    SuperBlocks["RelationalDb"] = "relational-database";
    SuperBlocks["BackEndDevApis"] = "back-end-development-and-apis";
    SuperBlocks["QualityAssurance"] = "quality-assurance";
    SuperBlocks["SciCompPy"] = "scientific-computing-with-python";
    SuperBlocks["DataAnalysisPy"] = "data-analysis-with-python";
    SuperBlocks["InfoSec"] = "information-security";
    SuperBlocks["MachineLearningPy"] = "machine-learning-with-python";
    SuperBlocks["CodingInterviewPrep"] = "coding-interview-prep";
    SuperBlocks["TheOdinProject"] = "the-odin-project";
    SuperBlocks["ProjectEuler"] = "project-euler";
    SuperBlocks["CollegeAlgebraPy"] = "college-algebra-with-python";
    SuperBlocks["FoundationalCSharp"] = "foundational-c-sharp-with-microsoft";
    SuperBlocks["ExampleCertification"] = "example-certification";
    SuperBlocks["UpcomingPython"] = "upcoming-python";
    SuperBlocks["A2English"] = "a2-english-for-developers";
    SuperBlocks["B1English"] = "b1-english-for-developers";
    SuperBlocks["RosettaCode"] = "rosetta-code";
    SuperBlocks["PythonForEverybody"] = "python-for-everybody";
})(SuperBlocks || (exports.SuperBlocks = SuperBlocks = {}));
/*
 * SuperBlockStages.New = SHOW_NEW_CURRICULUM === 'true'
 * 'New' -> shown only on english staging at the moment
 *
 * SuperBlockStages.Upcoming = SHOW_UPCOMING_CHANGES === 'true'
 * 'Upcoming' is for development -> not shown on stag or prod anywhere
 */
var SuperBlockStages;
(function (SuperBlockStages) {
    SuperBlockStages[SuperBlockStages["FrontEnd"] = 0] = "FrontEnd";
    SuperBlockStages[SuperBlockStages["Backend"] = 1] = "Backend";
    SuperBlockStages[SuperBlockStages["Python"] = 2] = "Python";
    SuperBlockStages[SuperBlockStages["English"] = 3] = "English";
    SuperBlockStages[SuperBlockStages["Professional"] = 4] = "Professional";
    SuperBlockStages[SuperBlockStages["Extra"] = 5] = "Extra";
    SuperBlockStages[SuperBlockStages["Legacy"] = 6] = "Legacy";
    SuperBlockStages[SuperBlockStages["New"] = 7] = "New";
    SuperBlockStages[SuperBlockStages["Upcoming"] = 8] = "Upcoming";
})(SuperBlockStages || (exports.SuperBlockStages = SuperBlockStages = {}));
// order of buttons on map, this should include all superblocks
// new and upcoming superblocks are removed below
exports.superBlockOrder = {
    [SuperBlockStages.FrontEnd]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.DataVis
    ],
    [SuperBlockStages.Backend]: [
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance
    ],
    [SuperBlockStages.Python]: [
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy
    ],
    [SuperBlockStages.English]: [SuperBlocks.A2English],
    [SuperBlockStages.Professional]: [SuperBlocks.FoundationalCSharp],
    [SuperBlockStages.Extra]: [
        SuperBlocks.TheOdinProject,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.RosettaCode
    ],
    [SuperBlockStages.Legacy]: [
        SuperBlocks.RespWebDesign,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.PythonForEverybody
    ],
    [SuperBlockStages.New]: [],
    [SuperBlockStages.Upcoming]: [
        SuperBlocks.B1English,
        SuperBlocks.ExampleCertification,
        SuperBlocks.UpcomingPython
    ]
};
Object.freeze(exports.superBlockOrder);
// when a superBlock is audited, remove it from its language below
// when adding a new language, add all (not audited) superblocks to the object
exports.notAuditedSuperBlocks = {
    [i18n_1.Languages.English]: [],
    [i18n_1.Languages.Espanol]: [
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Chinese]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.ChineseTraditional]: [
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Italian]: [
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Portuguese]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Ukrainian]: [
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Japanese]: [
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.German]: [
        SuperBlocks.RelationalDb,
        SuperBlocks.QualityAssurance,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Arabic]: [
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.TheOdinProject,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Swahili]: [
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.RespWebDesign,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody
    ],
    [i18n_1.Languages.Korean]: [
        SuperBlocks.RespWebDesignNew,
        SuperBlocks.JsAlgoDataStruct,
        SuperBlocks.BackEndDevApis,
        SuperBlocks.QualityAssurance,
        SuperBlocks.SciCompPy,
        SuperBlocks.DataAnalysisPy,
        SuperBlocks.InfoSec,
        SuperBlocks.MachineLearningPy,
        SuperBlocks.CollegeAlgebraPy,
        SuperBlocks.FoundationalCSharp,
        SuperBlocks.CodingInterviewPrep,
        SuperBlocks.ProjectEuler,
        SuperBlocks.TheOdinProject,
        SuperBlocks.FrontEndDevLibs,
        SuperBlocks.JsAlgoDataStructNew,
        SuperBlocks.UpcomingPython,
        SuperBlocks.A2English,
        SuperBlocks.B1English,
        SuperBlocks.PythonForEverybody,
        SuperBlocks.DataVis,
        SuperBlocks.RelationalDb,
        SuperBlocks.ExampleCertification,
        SuperBlocks.RosettaCode
    ]
};
Object.freeze(exports.notAuditedSuperBlocks);
// removes new and upcoming from superBlockOrder
// not used yet, will be used when adding progress indicators to map
function createSuperBlockMap({ showNewCurriculum, showUpcomingChanges }) {
    const superBlockMap = { ...exports.superBlockOrder };
    if (!showNewCurriculum) {
        superBlockMap[SuperBlockStages.New] = [];
    }
    if (!showUpcomingChanges) {
        superBlockMap[SuperBlockStages.Upcoming] = [];
    }
    return superBlockMap;
}
exports.createSuperBlockMap = createSuperBlockMap;
function createFlatSuperBlockMap({ showNewCurriculum, showUpcomingChanges }) {
    const superBlockMap = { ...exports.superBlockOrder };
    if (!showNewCurriculum) {
        superBlockMap[SuperBlockStages.New] = [];
    }
    if (!showUpcomingChanges) {
        superBlockMap[SuperBlockStages.Upcoming] = [];
    }
    return Object.values(superBlockMap).flat();
}
exports.createFlatSuperBlockMap = createFlatSuperBlockMap;
function getAuditedSuperBlocks({ language = 'english', showNewCurriculum, showUpcomingChanges }) {
    if (!Object.prototype.hasOwnProperty.call(exports.notAuditedSuperBlocks, language)) {
        throw Error(`'${language}' key not found in 'notAuditedSuperBlocks'`);
    }
    const flatSuperBlockMap = createFlatSuperBlockMap({
        showNewCurriculum,
        showUpcomingChanges
    });
    const auditedSuperBlocks = flatSuperBlockMap.filter(superBlock => !exports.notAuditedSuperBlocks[language].includes(superBlock));
    return auditedSuperBlocks;
}
exports.getAuditedSuperBlocks = getAuditedSuperBlocks;
