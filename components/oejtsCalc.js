
function scoreCalc() {
    ieScore = (ieScore - q3.score - q7.score - q11.score + q15.score - q19.score + q23.score + q27.score - q31.score);
    snScore = (snScore + q4.score + q8.score + q12.score + q16.score + q20.score - q24.score - q28.score + q32.score);
    ftScore = (ftScore - q2.score + q6.score + q10.score - q14.score - q18.score + q22.score - q26.score - q30.score);
    jpScore = (jpScore + q1.score + q5.score - q9.score + q13.score - q17.score + q21.score - q25.score + q29.score);
    }

function typeCalc() {
    if (ieScore > 24) then (typeIE = "I", return typeIE)
    else (typeIE = "E", return typeIE);
    if (snScore > 24) then (typeSN = "N", return typeSN)
    else (typeSN = "S", return typeSN);
    if (ftSCore > 24) then (typeFT = "T", return typeFT)
    else (typeFT = "F", return typeFT);
    if (jpScore > 24) then (typeJP = "P", return typeJP)
    else (typeJP = "J", return typeJP);
}