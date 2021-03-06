import React from 'react';

const BackgroundAnimation = ({ night }) => (
  <>
  <div className="dark-wrapper"></div>
  <div style={{ position: 'fixed', width: "100vw", height: "100vh", zIndex: -2 }}>
    {
      night ? (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:"auto",background:"#f1f2f3",display:"block",zIndex:1,position:"relative"}} width="1760" height="1032" preserveAspectRatio="xMidYMid" viewBox="0 0 1760 1032">
          <g transform="translate(880,516) scale(1,1) translate(-880,-516)"><defs>
            <linearGradient id="lg-0.7266810957805085" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#5e8cb1" offset="0"></stop>
              <stop stopColor="#c2b4a0" offset="1"></stop>
            </linearGradient>
            <linearGradient id="lg-0.40487933951331345" x1="0" x2="1" y1="1" y2="0">
              <stop stopColor="#fffdeb" stopOpacity="1" offset="0"></stop>
              <stop stopColor="#fffdeb" stopOpacity="0" offset="1"></stop>
            </linearGradient>
          </defs>
            <rect x="0" y="0" width="1760" height="1032" fill="url(#lg-0.7266810957805085)"></rect><circle cx="963.6968136625452" cy="706.4651542883005" r="1.3259806845948563" fill="#ffffff" fillOpacity="0.38389666777183107">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="0s" values="1.3259806845948563;0.6629903422974281;1.7237748899733132;1.3259806845948563"></animate>
            </circle><circle cx="1464.343521084371" cy="722.4934141436511" r="0.8665289797869472" fill="#ffffff" fillOpacity="0.36991853417704845">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.001020408163265306s" values="0.8665289797869472;0.4332644898934736;1.1264876737230314;0.8665289797869472"></animate>
            </circle><circle cx="176.42041480664633" cy="229.57728455871344" r="1.826706084720329" fill="#ffffff" fillOpacity="0.7997872518383313">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.002040816326530612s" values="1.826706084720329;0.9133530423601645;2.3747179101364275;1.826706084720329"></animate>
            </circle><circle cx="1074.5954277971175" cy="485.7427536276762" r="1.4893690618877602" fill="#ffffff" fillOpacity="0.5763871334642359">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0030612244897959178s" values="1.4893690618877602;0.7446845309438801;1.9361797804540883;1.4893690618877602"></animate>
            </circle><circle cx="939.140855032841" cy="501.6634431603529" r="1.5925789729404445" fill="#ffffff" fillOpacity="0.5625028111973667">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.004081632653061224s" values="1.5925789729404445;0.7962894864702222;2.070352664822578;1.5925789729404445"></animate>
            </circle><circle cx="1389.936982387557" cy="999.7358514033151" r="0.7816257039103807" fill="#ffffff" fillOpacity="0.12813733889245776">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.00510204081632653s" values="0.7816257039103807;0.39081285195519033;1.016113415083495;0.7816257039103807"></animate>
            </circle><circle cx="1153.8490560507455" cy="135.29939352742323" r="1.7945034010385454" fill="#ffffff" fillOpacity="0.8820063428539914">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0061224489795918356s" values="1.7945034010385454;0.8972517005192727;2.3328544213501092;1.7945034010385454"></animate>
            </circle><circle cx="1731.3534423360386" cy="866.4449916602242" r="0.9857639931844787" fill="#ffffff" fillOpacity="0.2443793677381766">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.007142857142857142s" values="0.9857639931844787;0.49288199659223936;1.2814931911398224;0.9857639931844787"></animate>
            </circle><circle cx="1713.8888257103738" cy="779.1454091759155" r="1.0555058317016521" fill="#ffffff" fillOpacity="0.3205127245558877">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.008163265306122448s" values="1.0555058317016521;0.5277529158508261;1.3721575812121478;1.0555058317016521"></animate>
            </circle><circle cx="236.94364144762093" cy="614.5899373490084" r="1.8638039110143716" fill="#ffffff" fillOpacity="0.46402040347470197">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.009183673469387754s" values="1.8638039110143716;0.9319019555071858;2.422945084318683;1.8638039110143716"></animate>
            </circle><circle cx="304.66444729922864" cy="101.69246549135727" r="0.6872667013495144" fill="#ffffff" fillOpacity="0.9113147103273046">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.01020408163265306s" values="0.6872667013495144;0.3436333506747572;0.8934467117543687;0.6872667013495144"></animate>
            </circle><circle cx="1678.6923201285472" cy="542.5212002040796" r="1.6217747451636837" fill="#ffffff" fillOpacity="0.5268710463336516">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.011224489795918365s" values="1.6217747451636837;0.8108873725818418;2.108307168712789;1.6217747451636837"></animate>
            </circle><circle cx="79.2933454156941" cy="783.3944808790117" r="0.9462748595878353" fill="#ffffff" fillOpacity="0.3168071387683038">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.012244897959183671s" values="0.9462748595878353;0.47313742979391765;1.230157317464186;0.9462748595878353"></animate>
            </circle><circle cx="1230.2012272111874" cy="35.51837560999388" r="1.8230614609836753" fill="#ffffff" fillOpacity="0.9690246724331449">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.013265306122448977s" values="1.8230614609836753;0.9115307304918376;2.369979899278778;1.8230614609836753"></animate>
            </circle><circle cx="6.212420567412273" cy="285.26767736945646" r="1.5399625341611538" fill="#ffffff" fillOpacity="0.7512200488057065">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.014285714285714284s" values="1.5399625341611538;0.7699812670805769;2.0019512944095;1.5399625341611538"></animate>
            </circle><circle cx="1549.852206132773" cy="350.34747100963114" r="1.2825857104456029" fill="#ffffff" fillOpacity="0.6944644148171821">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.015306122448979591s" values="1.2825857104456029;0.6412928552228014;1.6673614235792837;1.2825857104456029"></animate>
            </circle><circle cx="656.3181888579779" cy="448.870695178676" r="1.0583840307825305" fill="#ffffff" fillOpacity="0.6085429983906895">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.016326530612244896s" values="1.0583840307825305;0.5291920153912653;1.3758992400172898;1.0583840307825305"></animate>
            </circle><circle cx="883.7827862412837" cy="791.4307861307379" r="1.0013869305981644" fill="#ffffff" fillOpacity="0.30979873302551925">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0173469387755102s" values="1.0013869305981644;0.5006934652990822;1.3018030097776139;1.0013869305981644"></animate>
            </circle><circle cx="1153.153510001115" cy="514.4524290427466" r="1.8170543458472908" fill="#ffffff" fillOpacity="0.551349625834814">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.01836734693877551s" values="1.8170543458472908;0.9085271729236454;2.3621706496014783;1.8170543458472908"></animate>
            </circle><circle cx="1723.6656949150536" cy="843.0512544836733" r="1.1241182653295652" fill="#ffffff" fillOpacity="0.26478088271772676">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.019387755102040813s" values="1.1241182653295652;0.5620591326647826;1.4613537449284348;1.1241182653295652"></animate>
            </circle><circle cx="1697.9370672320347" cy="825.9748502796524" r="1.5567274977145786" fill="#ffffff" fillOpacity="0.2796730956863497">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.02040816326530612s" values="1.5567274977145786;0.7783637488572893;2.0237457470289524;1.5567274977145786"></animate>
            </circle><circle cx="1435.8170679997122" cy="632.706820613054" r="1.4728308245393338" fill="#ffffff" fillOpacity="0.44822079597698783">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.021428571428571425s" values="1.4728308245393338;0.7364154122696669;1.9146800719011339;1.4728308245393338"></animate>
            </circle><circle cx="1007.590677277864" cy="923.8158876082305" r="0.9767867380665601" fill="#ffffff" fillOpacity="0.19434660964398506">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.02244897959183673s" values="0.9767867380665601;0.48839336903328007;1.2698227594865281;0.9767867380665601"></animate>
            </circle><circle cx="696.3423254288625" cy="378.54154674813816" r="1.3652802819508059" fill="#ffffff" fillOpacity="0.6698765580684841">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.023469387755102038s" values="1.3652802819508059;0.6826401409754029;1.7748643665360477;1.3652802819508059"></animate>
            </circle><circle cx="1718.493025299242" cy="467.2229727258746" r="1.730957007652452" fill="#ffffff" fillOpacity="0.5925381051809233">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.024489795918367342s" values="1.730957007652452;0.865478503826226;2.250244109948188;1.730957007652452"></animate>
            </circle><circle cx="1062.7819320270464" cy="317.13382228028377" r="1.889793195187039" fill="#ffffff" fillOpacity="0.7234298061509153">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.02551020408163265s" values="1.889793195187039;0.9448965975935195;2.4567311537431507;1.889793195187039"></animate>
            </circle><circle cx="144.4227612099161" cy="480.5727353063177" r="1.459648029500013" fill="#ffffff" fillOpacity="0.5808958703723973">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.026530612244897955s" values="1.459648029500013;0.7298240147500065;1.8975424383500168;1.459648029500013"></animate>
            </circle><circle cx="1620.8882952008064" cy="571.8533583396635" r="1.042982114017239" fill="#ffffff" fillOpacity="0.5012906758665726">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.027551020408163263s" values="1.042982114017239;0.5214910570086195;1.3558767482224108;1.042982114017239"></animate>
            </circle><circle cx="720.4471943273043" cy="86.40936406405244" r="1.5227036940083158" fill="#ffffff" fillOpacity="0.9246429964557683">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.028571428571428567s" values="1.5227036940083158;0.7613518470041579;1.9795148022108107;1.5227036940083158"></animate>
            </circle><circle cx="1539.804143727523" cy="893.6378395411855" r="1.2726754658004333" fill="#ffffff" fillOpacity="0.22066467481873359">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.029591836734693875s" values="1.2726754658004333;0.6363377329002167;1.6544781055405633;1.2726754658004333"></animate>
            </circle><circle cx="586.1705484511449" cy="375.87623787345933" r="0.8316204047375968" fill="#ffffff" fillOpacity="0.6722009553429135">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.030612244897959183s" values="0.8316204047375968;0.4158102023687984;1.081106526158876;0.8316204047375968"></animate>
            </circle><circle cx="1204.9026754422089" cy="633.9290843796687" r="1.7604258491469271" fill="#ffffff" fillOpacity="0.4471548682735448">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03163265306122449s" values="1.7604258491469271;0.8802129245734636;2.2885536038910055;1.7604258491469271"></animate>
            </circle><circle cx="470.96377556425773" cy="924.3835701530926" r="1.2233172284726619" fill="#ffffff" fillOpacity="0.1938515376571867">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03265306122448979s" values="1.2233172284726619;0.6116586142363309;1.5903123970144606;1.2233172284726619"></animate>
            </circle><circle cx="1222.942693634879" cy="493.34226629661487" r="0.9246891454552538" fill="#ffffff" fillOpacity="0.5697596514855103">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.033673469387755096s" values="0.9246891454552538;0.4623445727276269;1.20209588909183;0.9246891454552538"></animate>
            </circle><circle cx="415.14914337259734" cy="691.7847516509064" r="1.5510987115878678" fill="#ffffff" fillOpacity="0.3966993444904886">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0346938775510204s" values="1.5510987115878678;0.7755493557939339;2.0164283250642283;1.5510987115878678"></animate>
            </circle><circle cx="275.57303304431457" cy="1024.752340250607" r="1.4499554403596782" fill="#ffffff" fillOpacity="0.10632063350237766">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03571428571428571s" values="1.4499554403596782;0.7249777201798391;1.8849420724675816;1.4499554403596782"></animate>
            </circle><circle cx="609.5138270799945" cy="355.57458654085633" r="0.6827842914980295" fill="#ffffff" fillOpacity="0.6899058838306485">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03673469387755102s" values="0.6827842914980295;0.3413921457490148;0.8876195789474385;0.6827842914980295"></animate>
            </circle><circle cx="169.8669851136263" cy="731.5817788931074" r="1.2231939089054855" fill="#ffffff" fillOpacity="0.36199263468624354">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03775510204081632s" values="1.2231939089054855;0.6115969544527428;1.5901520815771313;1.2231939089054855"></animate>
            </circle><circle cx="1095.5345068226447" cy="802.5279250472406" r="0.7401857286332554" fill="#ffffff" fillOpacity="0.3001209955983367">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.038775510204081626s" values="0.7401857286332554;0.3700928643166277;0.962241447223232;0.7401857286332554"></animate>
            </circle><circle cx="850.4037349150998" cy="517.2000901591589" r="1.7723486039543697" fill="#ffffff" fillOpacity="0.5489534097449196">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03979591836734694s" values="1.7723486039543697;0.8861743019771848;2.3040531851406807;1.7723486039543697"></animate>
            </circle><circle cx="1547.4569110419209" cy="807.7268728379099" r="0.6699231128758442" fill="#ffffff" fillOpacity="0.29558702950182275">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04081632653061224s" values="0.6699231128758442;0.3349615564379221;0.8709000467385974;0.6699231128758442"></animate>
            </circle><circle cx="664.9132140464814" cy="263.3208076052277" r="1.2339341532576906" fill="#ffffff" fillOpacity="0.7703597608093945">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.041836734693877546s" values="1.2339341532576906;0.6169670766288453;1.6041143992349978;1.2339341532576906"></animate>
            </circle><circle cx="622.9556882541597" cy="145.81578161463622" r="1.2642503133061174" fill="#ffffff" fillOpacity="0.8728350741732823">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04285714285714285s" values="1.2642503133061174;0.6321251566530587;1.6435254072979526;1.2642503133061174"></animate>
            </circle><circle cx="1020.9396378020524" cy="772.8236042262672" r="0.7396570017863441" fill="#ffffff" fillOpacity="0.32602592654686">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04387755102040816s" values="0.7396570017863441;0.36982850089317204;0.9615541023222474;0.7396570017863441"></animate>
            </circle><circle cx="929.9734498435246" cy="867.1542885991183" r="0.7510987756468281" fill="#ffffff" fillOpacity="0.24376079482635032">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04489795918367346s" values="0.7510987756468281;0.37554938782341407;0.9764284083408766;0.7510987756468281"></animate>
            </circle><circle cx="1141.9485385474893" cy="802.8192885408753" r="1.370934893990025" fill="#ffffff" fillOpacity="0.2998668995283065">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04591836734693877s" values="1.370934893990025;0.6854674469950125;1.7822153621870325;1.370934893990025"></animate>
            </circle><circle cx="580.3989267046297" cy="801.7640552720692" r="1.0253969477530167" fill="#ffffff" fillOpacity="0.3007871610999397">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.046938775510204075s" values="1.0253969477530167;0.5126984738765084;1.3330160320789217;1.0253969477530167"></animate>
            </circle><circle cx="79.53952317506906" cy="661.8510875295713" r="1.0190610725823048" fill="#ffffff" fillOpacity="0.42280428413118787">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04795918367346939s" values="1.0190610725823048;0.5095305362911524;1.3247793943569963;1.0190610725823048"></animate>
            </circle><circle cx="504.1125293717785" cy="796.8369138191856" r="1.6484218627485303" fill="#ffffff" fillOpacity="0.30508408678559396">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.048979591836734684s" values="1.6484218627485303;0.8242109313742652;2.1429484215730894;1.6484218627485303"></animate>
            </circle><circle cx="1219.2543792018075" cy="720.0171731783543" r="1.6999536891044704" fill="#ffffff" fillOpacity="0.3720780466467841">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04999999999999999s" values="1.6999536891044704;0.8499768445522352;2.209939795835812;1.6999536891044704"></animate>
            </circle><circle cx="661.9579410974317" cy="912.3386717765297" r="1.1622046104070904" fill="#ffffff" fillOpacity="0.20435580949721244">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0510204081632653s" values="1.1622046104070904;0.5811023052035452;1.5108659935292177;1.1622046104070904"></animate>
            </circle><circle cx="303.91025490690635" cy="743.1454573831734" r="1.470695880446571" fill="#ffffff" fillOpacity="0.35190803135188375">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.052040816326530605s" values="1.470695880446571;0.7353479402232855;1.9119046445805425;1.470695880446571"></animate>
            </circle><circle cx="1691.9410862166687" cy="662.7822526394227" r="1.4520112476448055" fill="#ffffff" fillOpacity="0.4219922215353872">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.05306122448979591s" values="1.4520112476448055;0.7260056238224027;1.8876146219382473;1.4520112476448055"></animate>
            </circle><circle cx="212.88059754227663" cy="404.5598122663784" r="1.423424913984543" fill="#ffffff" fillOpacity="0.6471862102328095">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.05408163265306122s" values="1.423424913984543;0.7117124569922715;1.850452388179906;1.423424913984543"></animate>
            </circle><circle cx="1218.6670683304683" cy="604.4492667044018" r="1.761005322008721" fill="#ffffff" fillOpacity="0.47286401159499847">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.055102040816326525s" values="1.761005322008721;0.8805026610043605;2.2893069186113375;1.761005322008721"></animate>
            </circle><circle cx="908.9008805617616" cy="639.6723229023004" r="1.449652715403487" fill="#ffffff" fillOpacity="0.44214623002706366">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.05612244897959182s" values="1.449652715403487;0.7248263577017435;1.8845485300245333;1.449652715403487"></animate>
            </circle><circle cx="1626.7983080262657" cy="129.5232719729956" r="1.0401416738853277" fill="#ffffff" fillOpacity="0.8870436581630852">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.057142857142857134s" values="1.0401416738853277;0.5200708369426639;1.3521841760509261;1.0401416738853277"></animate>
            </circle><circle cx="668.962949729582" cy="957.6018765320453" r="1.0142956923124036" fill="#ffffff" fillOpacity="0.164882084419728">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.05816326530612244s" values="1.0142956923124036;0.5071478461562018;1.3185844000061246;1.0142956923124036"></animate>
            </circle><circle cx="593.4240257679195" cy="712.9750165515811" r="1.5118822004150796" fill="#ffffff" fillOpacity="0.37821946230966763">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.05918367346938775s" values="1.5118822004150796;0.7559411002075398;1.9654468605396036;1.5118822004150796"></animate>
            </circle><circle cx="1396.953880807995" cy="921.743025756502" r="0.7490023725378429" fill="#ffffff" fillOpacity="0.1961543380030506">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.060204081632653055s" values="0.7490023725378429;0.3745011862689214;0.9737030842991957;0.7490023725378429"></animate>
            </circle><circle cx="750.7571270276277" cy="439.5963336287815" r="1.5112551548477875" fill="#ffffff" fillOpacity="0.6166311043935044">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.061224489795918366s" values="1.5112551548477875;0.7556275774238937;1.9646317013021237;1.5112551548477875"></animate>
            </circle><circle cx="284.2305112458839" cy="42.90271669987422" r="1.1222324531194452" fill="#ffffff" fillOpacity="0.962584840087319">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.062244897959183663s" values="1.1222324531194452;0.5611162265597226;1.458902189055279;1.1222324531194452"></animate>
            </circle><circle cx="747.5437944591404" cy="281.8848981558468" r="1.1225740194647584" fill="#ffffff" fillOpacity="0.7541701469571103">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06326530612244897s" values="1.1225740194647584;0.5612870097323792;1.459346225304186;1.1225740194647584"></animate>
            </circle><circle cx="273.8892796631034" cy="370.22765935331876" r="1.4870495455538126" fill="#ffffff" fillOpacity="0.6771270412616405">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06428571428571428s" values="1.4870495455538126;0.7435247727769063;1.9331644092199565;1.4870495455538126"></animate>
            </circle><circle cx="1643.1757957170087" cy="670.1209940503967" r="1.508535909262543" fill="#ffffff" fillOpacity="0.41559215635139823">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06530612244897958s" values="1.508535909262543;0.7542679546312715;1.961096682041306;1.508535909262543"></animate>
            </circle><circle cx="1251.446513599394" cy="840.9535696755646" r="1.3279775283620967" fill="#ffffff" fillOpacity="0.2666102590038681">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06632653061224489s" values="1.3279775283620967;0.6639887641810484;1.7263707868707259;1.3279775283620967"></animate>
            </circle><circle cx="615.6110612746542" cy="1021.0409199574883" r="0.9968917647356716" fill="#ffffff" fillOpacity="0.10955733724637648">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06734693877551019s" values="0.9968917647356716;0.4984458823678358;1.2959592941563731;0.9968917647356716"></animate>
            </circle><circle cx="804.0967443109249" cy="745.6063745458608" r="1.513783803918913" fill="#ffffff" fillOpacity="0.3497618826634935">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06836734693877551s" values="1.513783803918913;0.7568919019594565;1.967918945094587;1.513783803918913"></animate>
            </circle><circle cx="1638.8744706023228" cy="985.8865083245657" r="1.8880868398317652" fill="#ffffff" fillOpacity="0.14021525436811128">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0693877551020408s" values="1.8880868398317652;0.9440434199158826;2.454512891781295;1.8880868398317652"></animate>
            </circle><circle cx="1535.1800370289557" cy="598.0700034876475" r="1.5886946032747422" fill="#ffffff" fillOpacity="0.4784273225398423">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0704081632653061s" values="1.5886946032747422;0.7943473016373711;2.065302984257165;1.5886946032747422"></animate>
            </circle><circle cx="956.1194900108125" cy="437.99592102958616" r="1.4824616440307332" fill="#ffffff" fillOpacity="0.6180268130555934">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07142857142857142s" values="1.4824616440307332;0.7412308220153666;1.9272001372399532;1.4824616440307332"></animate>
            </circle><circle cx="61.73669157412203" cy="455.3324226838761" r="1.1427212571472685" fill="#ffffff" fillOpacity="0.6029077709152243">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07244897959183673s" values="1.1427212571472685;0.5713606285736342;1.485537634291449;1.1427212571472685"></animate>
            </circle><circle cx="794.011185163923" cy="97.22942606177897" r="0.8666088903071056" fill="#ffffff" fillOpacity="0.9152068958763555">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07346938775510203s" values="0.8666088903071056;0.4333044451535528;1.1265915573992373;0.8666088903071056"></animate>
            </circle><circle cx="1479.813746747079" cy="699.843637131841" r="0.8429159025071538" fill="#ffffff" fillOpacity="0.389671246687348">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07448979591836734s" values="0.8429159025071538;0.4214579512535769;1.0957906732593;0.8429159025071538"></animate>
            </circle><circle cx="6.329608277226022" cy="117.45680855235048" r="1.6377707015104515" fill="#ffffff" fillOpacity="0.8975667367276013">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07551020408163264s" values="1.6377707015104515;0.8188853507552257;2.129101911963587;1.6377707015104515"></animate>
            </circle><circle cx="141.0190674051745" cy="583.9450755914409" r="0.6774575446684358" fill="#ffffff" fillOpacity="0.49074557361211557">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07653061224489795s" values="0.6774575446684358;0.3387287723342179;0.8806948080689665;0.6774575446684358"></animate>
            </circle><circle cx="1561.8463946574584" cy="571.5928669306214" r="1.2766957317604546" fill="#ffffff" fillOpacity="0.5015178486070162">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07755102040816325s" values="1.2766957317604546;0.6383478658802273;1.659704451288591;1.2766957317604546"></animate>
            </circle><circle cx="417.3382216036225" cy="310.21567966458394" r="1.2493250306623385" fill="#ffffff" fillOpacity="0.7294630700599558">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07857142857142856s" values="1.2493250306623385;0.6246625153311692;1.6241225398610402;1.2493250306623385"></animate>
            </circle><circle cx="1668.4964447848943" cy="330.6139066809129" r="1.5264262310159" fill="#ffffff" fillOpacity="0.7116739185922271">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07959183673469387s" values="1.5264262310159;0.76321311550795;1.9843541003206702;1.5264262310159"></animate>
            </circle><circle cx="1429.2961288668876" cy="797.8870428221056" r="1.7672242315558904" fill="#ffffff" fillOpacity="0.3041682766086288">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08061224489795918s" values="1.7672242315558904;0.8836121157779452;2.2973915010226578;1.7672242315558904"></animate>
            </circle><circle cx="15.461014025693451" cy="321.50026620785536" r="1.2512514155934877" fill="#ffffff" fillOpacity="0.7196218608652425">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08163265306122448s" values="1.2512514155934877;0.6256257077967439;1.626626840271534;1.2512514155934877"></animate>
            </circle><circle cx="667.3781867392242" cy="390.81798784413024" r="1.500624786762553" fill="#ffffff" fillOpacity="0.6591703594382585">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08265306122448979s" values="1.500624786762553;0.7503123933812765;1.9508122227913192;1.500624786762553"></animate>
            </circle><circle cx="1116.8579848273507" cy="271.7368977597289" r="1.6479607266427296" fill="#ffffff" fillOpacity="0.7630201473025621">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08367346938775509s" values="1.6479607266427296;0.8239803633213648;2.1423489446355486;1.6479607266427296"></animate>
            </circle><circle cx="1017.6733227894435" cy="697.2333965562449" r="1.111119942549634" fill="#ffffff" fillOpacity="0.39194761928234456">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0846938775510204s" values="1.111119942549634;0.555559971274817;1.4444559253145244;1.111119942549634"></animate>
            </circle><circle cx="1385.1861989029999" cy="870.6062461365465" r="1.1544691981061723" fill="#ffffff" fillOpacity="0.24075036674138392">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.0857142857142857s" values="1.1544691981061723;0.5772345990530862;1.500809957538024;1.1544691981061723"></animate>
            </circle><circle cx="1261.6646856630618" cy="240.37618659780557" r="0.7142832963346395" fill="#ffffff" fillOpacity="0.790369604711216">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.086734693877551s" values="0.7142832963346395;0.35714164816731975;0.9285682852350313;0.7142832963346395"></animate>
            </circle><circle cx="3.0128829854921335" cy="493.6889133137793" r="1.3758854519353523" fill="#ffffff" fillOpacity="0.5694573430403088">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08775510204081632s" values="1.3758854519353523;0.6879427259676761;1.788651087515958;1.3758854519353523"></animate>
            </circle><circle cx="510.58658994274145" cy="581.7992936228916" r="1.717543319922647" fill="#ffffff" fillOpacity="0.49261689509631545">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08877551020408161s" values="1.717543319922647;0.8587716599613235;2.2328063158994413;1.717543319922647"></animate>
            </circle><circle cx="441.8020544912769" cy="820.9224976388795" r="1.5664264039974922" fill="#ffffff" fillOpacity="0.28407921717539586">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08979591836734692s" values="1.5664264039974922;0.7832132019987461;2.03635432519674;1.5664264039974922"></animate>
            </circle><circle cx="1378.663199211343" cy="834.5762392286592" r="1.0961940502045986" fill="#ffffff" fillOpacity="0.2721718843936112">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09081632653061224s" values="1.0961940502045986;0.5480970251022993;1.4250522652659783;1.0961940502045986"></animate>
            </circle><circle cx="230.80107822409954" cy="222.46701649870312" r="0.9341040985452587" fill="#ffffff" fillOpacity="0.805988067006945">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09183673469387754s" values="0.9341040985452587;0.46705204927262933;1.2143353281088363;0.9341040985452587"></animate>
            </circle><circle cx="1718.030136910845" cy="326.9856492787389" r="1.421930713651923" fill="#ffffff" fillOpacity="0.7148380965592392">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09285714285714283s" values="1.421930713651923;0.7109653568259615;1.8485099277475;1.421930713651923"></animate>
            </circle><circle cx="1140.7572291051813" cy="50.31349349705545" r="1.6044481007651445" fill="#ffffff" fillOpacity="0.9561219533455911">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09387755102040815s" values="1.6044481007651445;0.8022240503825723;2.085782530994688;1.6044481007651445"></animate>
            </circle><circle cx="288.96901658810935" cy="871.190083667393" r="1.5892089987845832" fill="#ffffff" fillOpacity="0.24024120610401775">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09489795918367346s" values="1.5892089987845832;0.7946044993922916;2.065971698419958;1.5892089987845832"></animate>
            </circle><circle cx="174.0951949596908" cy="123.3946298214121" r="1.481689202843565" fill="#ffffff" fillOpacity="0.8923884042255127">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09591836734693877s" values="1.481689202843565;0.7408446014217825;1.9261959636966346;1.481689202843565"></animate>
            </circle><circle cx="230.18253924108083" cy="718.8755648712362" r="1.842307529341803" fill="#ffffff" fillOpacity="0.37307363528671267">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09693877551020406s" values="1.842307529341803;0.9211537646709015;2.394999788144344;1.842307529341803"></animate>
            </circle><circle cx="884.334382126705" cy="159.7413959217578" r="1.0274729441889636" fill="#ffffff" fillOpacity="0.8606906430914902">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09795918367346937s" values="1.0274729441889636;0.5137364720944818;1.3357148274456527;1.0274729441889636"></animate>
            </circle><circle cx="1759.2897008119958" cy="922.9847909976419" r="0.8499931852621435" fill="#ffffff" fillOpacity="0.19507140319973093">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09897959183673469s" values="0.8499931852621435;0.42499659263107176;1.1049911408407866;0.8499931852621435"></animate>
            </circle><circle cx="669.0632298562451" cy="429.751838581121" r="1.2831581909979983" fill="#ffffff" fillOpacity="0.6252164198420457">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09999999999999998s" values="1.2831581909979983;0.6415790954989992;1.668105648297398;1.2831581909979983"></animate>
            </circle><circle cx="845.0481489634968" cy="679.4645965108895" r="1.4651583901165803" fill="#ffffff" fillOpacity="0.40744366583352665">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1010204081632653s" values="1.4651583901165803;0.7325791950582902;1.9047059071515544;1.4651583901165803"></animate>
            </circle><circle cx="1055.6937813944746" cy="994.4635086615283" r="1.69632399602283" fill="#ffffff" fillOpacity="0.13273531221378349">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1020408163265306s" values="1.69632399602283;0.848161998011415;2.205221194829679;1.69632399602283"></animate>
            </circle><circle cx="1507.1253306013045" cy="1027.9582917276446" r="0.8277071366744669" fill="#ffffff" fillOpacity="0.10352474558635649">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10306122448979592s" values="0.8277071366744669;0.41385356833723347;1.0760192776768072;0.8277071366744669"></animate>
            </circle><circle cx="179.01935201570726" cy="450.93807159550636" r="1.084502316032334" fill="#ffffff" fillOpacity="0.6067400538411282">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10408163265306121s" values="1.084502316032334;0.542251158016167;1.4098530108420342;1.084502316032334"></animate>
            </circle><circle cx="852.4883101131561" cy="626.8497468544117" r="0.6636544768456443" fill="#ffffff" fillOpacity="0.45332870913859447">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10510204081632651s" values="0.6636544768456443;0.33182723842282213;0.8627508198993376;0.6636544768456443"></animate>
            </circle><circle cx="1621.4791696399536" cy="137.16815407455272" r="1.4251412240813424" fill="#ffffff" fillOpacity="0.880376609818704">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10612244897959182s" values="1.4251412240813424;0.7125706120406712;1.8526835913057451;1.4251412240813424"></animate>
            </circle><circle cx="212.42227105351222" cy="620.1645512797136" r="1.335036067919304" fill="#ffffff" fillOpacity="0.4591588215583894">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10714285714285712s" values="1.335036067919304;0.667518033959652;1.7355468882950953;1.335036067919304"></animate>
            </circle><circle cx="1551.189281949457" cy="333.0471212781708" r="1.4443086707360901" fill="#ffffff" fillOpacity="0.7095519291178743">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10816326530612244s" values="1.4443086707360901;0.7221543353680451;1.8776012719569173;1.4443086707360901"></animate>
            </circle><circle cx="584.929657042331" cy="719.3043053377776" r="1.331051821376834" fill="#ffffff" fillOpacity="0.37269973371705445">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10918367346938773s" values="1.331051821376834;0.665525910688417;1.7303673677898843;1.331051821376834"></animate>
            </circle><circle cx="952.8928155209951" cy="928.567445948233" r="1.2188078516697542" fill="#ffffff" fillOpacity="0.19020280876607593">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11020408163265305s" values="1.2188078516697542;0.6094039258348771;1.5844502071706805;1.2188078516697542"></animate>
            </circle><circle cx="96.51008367291038" cy="817.8516171851759" r="1.385671889736429" fill="#ffffff" fillOpacity="0.28675731059432336">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11122448979591835s" values="1.385671889736429;0.6928359448682145;1.8013734566573578;1.385671889736429"></animate>
            </circle><circle cx="377.4325058689982" cy="339.7715812259304" r="0.7611459291990686" fill="#ffffff" fillOpacity="0.70368757451227">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11224489795918365s" values="0.7611459291990686;0.3805729645995343;0.9894897079587893;0.7611459291990686"></animate>
            </circle><circle cx="1588.5265026069583" cy="276.4331420284067" r="0.899594709288787" fill="#ffffff" fillOpacity="0.758924585440343">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11326530612244896s" values="0.899594709288787;0.4497973546443935;1.169473122075423;0.899594709288787"></animate>
            </circle><circle cx="1391.685789411993" cy="145.19744223600284" r="1.6768139635655916" fill="#ffffff" fillOpacity="0.8733743236313929">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11428571428571427s" values="1.6768139635655916;0.8384069817827958;2.179858152635269;1.6768139635655916"></animate>
            </circle><circle cx="548.4536595409432" cy="371.83431381730605" r="1.4042115619674091" fill="#ffffff" fillOpacity="0.6757258891128144">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11530612244897959s" values="1.4042115619674091;0.7021057809837046;1.825475030557632;1.4042115619674091"></animate>
            </circle><circle cx="1013.9895539404747" cy="248.5690059656328" r="0.7415708193861277" fill="#ffffff" fillOpacity="0.7832247040997388">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11632653061224488s" values="0.7415708193861277;0.37078540969306384;0.964042065201966;0.7415708193861277"></animate>
            </circle><circle cx="895.2622274687578" cy="769.7996123939143" r="1.4222426234437395" fill="#ffffff" fillOpacity="0.3286631287262375">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1173469387755102s" values="1.4222426234437395;0.7111213117218698;1.8489154104768615;1.4222426234437395"></animate>
            </circle><circle cx="808.8939404767214" cy="923.9439958582972" r="0.9079678262776205" fill="#ffffff" fillOpacity="0.19423488733288036">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1183673469387755s" values="0.9079678262776205;0.45398391313881026;1.1803581741609066;0.9079678262776205"></animate>
            </circle><circle cx="1168.3332064799195" cy="144.19859203949238" r="0.7952599245122076" fill="#ffffff" fillOpacity="0.8742454139190473">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11938775510204079s" values="0.7952599245122076;0.3976299622561038;1.0338379018658699;0.7952599245122076"></animate>
            </circle><circle cx="1313.6633135279685" cy="406.1050072598335" r="1.4415269597149378" fill="#ffffff" fillOpacity="0.6458386564594476">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12040816326530611s" values="1.4415269597149378;0.7207634798574689;1.8739850476294193;1.4415269597149378"></animate>
            </circle><circle cx="386.8756801698199" cy="767.044855669636" r="1.1537936524826777" fill="#ffffff" fillOpacity="0.3310655328462476">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12142857142857141s" values="1.1537936524826777;0.5768968262413389;1.4999317482274812;1.1537936524826777"></animate>
            </circle><circle cx="1154.8817630267124" cy="417.1354228248078" r="1.8044327315098152" fill="#ffffff" fillOpacity="0.6362191080016211">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12244897959183673s" values="1.8044327315098152;0.9022163657549076;2.34576255096276;1.8044327315098152"></animate>
            </circle><circle cx="61.490286280984066" cy="380.3222861554682" r="0.6651525212732555" fill="#ffffff" fillOpacity="0.6683235876551149">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12346938775510202s" values="0.6651525212732555;0.33257626063662776;0.8646982776552322;0.6651525212732555"></animate>
            </circle><circle cx="358.0699291382047" cy="53.42676397868988" r="1.5456990893571563" fill="#ffffff" fillOpacity="0.9534068918790495">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12448979591836733s" values="1.5456990893571563;0.7728495446785781;2.0094088161643033;1.5456990893571563"></animate>
            </circle><circle cx="207.08118965318803" cy="836.1595203075599" r="1.266189941734491" fill="#ffffff" fillOpacity="0.27079111601084893">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12551020408163263s" values="1.266189941734491;0.6330949708672455;1.6460469242548383;1.266189941734491"></animate>
            </circle><circle cx="473.32323971493275" cy="959.9479475330776" r="1.3631061679545793" fill="#ffffff" fillOpacity="0.1628360922676649">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12653061224489795s" values="1.3631061679545793;0.6815530839772896;1.7720380183409532;1.3631061679545793"></animate>
            </circle><circle cx="1422.6977680240411" cy="353.0343140010226" r="1.0191157407032363" fill="#ffffff" fillOpacity="0.6921212377898058">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12755102040816324s" values="1.0191157407032363;0.5095578703516181;1.3248504629142073;1.0191157407032363"></animate>
            </circle><circle cx="1403.6834934088424" cy="686.4310539820675" r="1.7316152589486435" fill="#ffffff" fillOpacity="0.40136826687610394">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12857142857142856s" values="1.7316152589486435;0.8658076294743218;2.251099836633237;1.7316152589486435"></animate>
            </circle><circle cx="1268.5043871320509" cy="213.928172542653" r="1.528365689610939" fill="#ffffff" fillOpacity="0.8134347332476863">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12959183673469388s" values="1.528365689610939;0.7641828448054695;1.9868753964942207;1.528365689610939"></animate>
            </circle><circle cx="734.7400097631175" cy="306.9180973105511" r="1.785277646229188" fill="#ffffff" fillOpacity="0.7323388686245195">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13061224489795917s" values="1.785277646229188;0.892638823114594;2.3208609400979445;1.785277646229188"></animate>
            </circle><circle cx="518.7855381706671" cy="972.3319290284455" r="1.5600239435382157" fill="#ffffff" fillOpacity="0.15203610840542542">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13163265306122446s" values="1.5600239435382157;0.7800119717691079;2.0280311265996804;1.5600239435382157"></animate>
            </circle><circle cx="1167.7380714769085" cy="282.00275682803465" r="1.6599888971196881" fill="#ffffff" fillOpacity="0.7540673632313651">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13265306122448978s" values="1.6599888971196881;0.8299944485598441;2.1579855662555945;1.6599888971196881"></animate>
            </circle><circle cx="440.1143100685727" cy="260.2984349525048" r="1.393831291922288" fill="#ffffff" fillOpacity="0.7729955509135134">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13367346938775507s" values="1.393831291922288;0.696915645961144;1.8119806794989743;1.393831291922288"></animate>
            </circle><circle cx="397.4833627702616" cy="411.1231311144584" r="1.188543768290064" fill="#ffffff" fillOpacity="0.6414623856559957">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13469387755102039s" values="1.188543768290064;0.594271884145032;1.545106898777083;1.188543768290064"></animate>
            </circle><circle cx="276.6843912128403" cy="45.138401561734106" r="0.8504700586403645" fill="#ffffff" fillOpacity="0.9606351149170924">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1357142857142857s" values="0.8504700586403645;0.42523502932018226;1.105611076232474;0.8504700586403645"></animate>
            </circle><circle cx="517.1140990300878" cy="946.3410493557205" r="1.409050027579244" fill="#ffffff" fillOpacity="0.17470257323629024">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13673469387755102s" values="1.409050027579244;0.704525013789622;1.831765035853017;1.409050027579244"></animate>
            </circle><circle cx="696.4959671756337" cy="312.4724025481283" r="0.9725331542651359" fill="#ffffff" fillOpacity="0.7274949977777951">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1377551020408163s" values="0.9725331542651359;0.48626657713256793;1.2642931005446767;0.9725331542651359"></animate>
            </circle><circle cx="439.0011481443699" cy="217.96274133819833" r="0.8023556221366908" fill="#ffffff" fillOpacity="0.8099162139492456">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1387755102040816s" values="0.8023556221366908;0.4011778110683454;1.043062308777698;0.8023556221366908"></animate>
            </circle><circle cx="1002.4774113652209" cy="676.8897959734662" r="1.0803863239323905" fill="#ffffff" fillOpacity="0.40968913141848884">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.13979591836734692s" values="1.0803863239323905;0.5401931619661953;1.4045022211121077;1.0803863239323905"></animate>
            </circle><circle cx="814.8552507352874" cy="960.3776201061953" r="1.312601348035751" fill="#ffffff" fillOpacity="0.16246137781436457">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1408163265306122s" values="1.312601348035751;0.6563006740178755;1.7063817524464764;1.312601348035751"></animate>
            </circle><circle cx="1488.4334586654581" cy="555.6848138537314" r="0.9331725731818448" fill="#ffffff" fillOpacity="0.5153911507089552">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14183673469387753s" values="0.9331725731818448;0.4665862865909224;1.2131243451363982;0.9331725731818448"></animate>
            </circle><circle cx="1287.3036893025787" cy="833.1738341374937" r="1.4335471388478291" fill="#ffffff" fillOpacity="0.27339491208939504">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14285714285714285s" values="1.4335471388478291;0.7167735694239146;1.8636112805021778;1.4335471388478291"></animate>
            </circle><circle cx="1365.471904122432" cy="203.94354818602508" r="1.1242606962475845" fill="#ffffff" fillOpacity="0.8221422544889316">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14387755102040814s" values="1.1242606962475845;0.5621303481237923;1.46153890512186;1.1242606962475845"></animate>
            </circle><circle cx="829.2818068180413" cy="968.6484822001909" r="1.0795623736807478" fill="#ffffff" fillOpacity="0.15524841668588008">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14489795918367346s" values="1.0795623736807478;0.5397811868403739;1.403431085784972;1.0795623736807478"></animate>
            </circle><circle cx="456.22320218771216" cy="206.0316125848994" r="1.8120030470827533" fill="#ffffff" fillOpacity="0.8203212680945644">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14591836734693875s" values="1.8120030470827533;0.9060015235413766;2.355603961207579;1.8120030470827533"></animate>
            </circle><circle cx="1540.9517194608675" cy="242.01059360226458" r="1.0107227678134358" fill="#ffffff" fillOpacity="0.7889442497654668">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14693877551020407s" values="1.0107227678134358;0.5053613839067179;1.3139395981574666;1.0107227678134358"></animate>
            </circle><circle cx="399.5981070640624" cy="38.67498867867419" r="0.9498252115759662" fill="#ffffff" fillOpacity="0.9662718121988306">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14795918367346936s" values="0.9498252115759662;0.4749126057879831;1.234772775048756;0.9498252115759662"></animate>
            </circle><circle cx="89.25735455639604" cy="934.7913261566316" r="1.3981329543457106" fill="#ffffff" fillOpacity="0.18477500625875148">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14897959183673468s" values="1.3981329543457106;0.6990664771728553;1.8175728406494238;1.3981329543457106"></animate>
            </circle><circle cx="1370.7238407654404" cy="91.90080086844026" r="1.0758321649101976" fill="#ffffff" fillOpacity="0.9198539527310114">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14999999999999997s" values="1.0758321649101976;0.5379160824550988;1.398581814383257;1.0758321649101976"></animate>
            </circle><circle cx="1417.7731056618627" cy="467.4777284440145" r="0.9915237885216752" fill="#ffffff" fillOpacity="0.592315934496499">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.15102040816326529s" values="0.9915237885216752;0.4957618942608376;1.2889809250781779;0.9915237885216752"></animate>
            </circle><circle cx="741.0267923980222" cy="920.2992365329442" r="0.8120551018810148" fill="#ffffff" fillOpacity="0.1974134565119673">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1520408163265306s" values="0.8120551018810148;0.4060275509405074;1.0556716324453193;0.8120551018810148"></animate>
            </circle><circle cx="720.2623412752454" cy="256.40111281693675" r="0.9444956774112605" fill="#ffffff" fillOpacity="0.7763943783573225">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1530612244897959s" values="0.9444956774112605;0.47224783870563025;1.2278443806346386;0.9444956774112605"></animate>
            </circle><circle cx="1077.1106670136958" cy="537.8236124294913" r="1.702460873814315" fill="#ffffff" fillOpacity="0.5309677798580018">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1540816326530612s" values="1.702460873814315;0.8512304369071575;2.2131991359586096;1.702460873814315"></animate>
            </circle><circle cx="609.5931277937809" cy="472.2698880750333" r="0.7489855484912427" fill="#ffffff" fillOpacity="0.5881367255159593">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1551020408163265s" values="0.7489855484912427;0.37449277424562133;0.9736812130386154;0.7489855484912427"></animate>
            </circle><circle cx="165.81520139235747" cy="487.02188107249924" r="1.0882156639208689" fill="#ffffff" fillOpacity="0.5752716153437507">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.15612244897959182s" values="1.0882156639208689;0.5441078319604344;1.4146803630971296;1.0882156639208689"></animate>
            </circle><circle cx="752.8421422669039" cy="213.18211770595045" r="1.2793041581722546" fill="#ffffff" fillOpacity="0.8140853624657409">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1571428571428571s" values="1.2793041581722546;0.6396520790861273;1.663095405623931;1.2793041581722546"></animate>
            </circle><circle cx="1174.2222457771975" cy="839.8308703420005" r="0.8964095971287028" fill="#ffffff" fillOpacity="0.2675893572598833">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.15816326530612243s" values="0.8964095971287028;0.4482047985643514;1.1653324762673136;0.8964095971287028"></animate>
            </circle><circle cx="1440.0863716872664" cy="36.663107954122935" r="0.9584940912733352" fill="#ffffff" fillOpacity="0.9680263593423346">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.15918367346938775s" values="0.9584940912733352;0.4792470456366676;1.2460423186553358;0.9584940912733352"></animate>
            </circle><circle cx="665.1657269422915" cy="970.7524863938169" r="1.392250913765486" fill="#ffffff" fillOpacity="0.15341352930771784">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16020408163265304s" values="1.392250913765486;0.696125456882743;1.8099261878951318;1.392250913765486"></animate>
            </circle><circle cx="582.6640643887772" cy="3.144469482673964" r="0.8006786422805463" fill="#ffffff" fillOpacity="0.9972577301023192">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16122448979591836s" values="0.8006786422805463;0.40033932114027315;1.0408822349647102;0.8006786422805463"></animate>
            </circle><circle cx="217.66236598390157" cy="588.0311194464377" r="1.401154543496027" fill="#ffffff" fillOpacity="0.4871821632734554">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16224489795918365s" values="1.401154543496027;0.7005772717480135;1.8215009065448353;1.401154543496027"></animate>
            </circle><circle cx="517.8783991482641" cy="802.5754046640596" r="1.1742127891108767" fill="#ffffff" fillOpacity="0.3000795889557619">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16326530612244897s" values="1.1742127891108767;0.5871063945554383;1.5264766258441398;1.1742127891108767"></animate>
            </circle><circle cx="327.3676445452498" cy="1012.7736547805657" r="0.8777694078301003" fill="#ffffff" fillOpacity="0.11676716152857641">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16428571428571426s" values="0.8777694078301003;0.43888470391505013;1.1411002301791304;0.8777694078301003"></animate>
            </circle><circle cx="1153.7041045013316" cy="669.7476530721766" r="0.6626499338096072" fill="#ffffff" fillOpacity="0.4159177444137995">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16530612244897958s" values="0.6626499338096072;0.3313249669048036;0.8614449139524895;0.6626499338096072"></animate>
            </circle><circle cx="436.88846272190597" cy="436.3736265814352" r="0.9126876173571697" fill="#ffffff" fillOpacity="0.6194416047254926">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1663265306122449s" values="0.9126876173571697;0.4563438086785849;1.1864939025643206;0.9126876173571697"></animate>
            </circle><circle cx="1406.461256787217" cy="864.5818404182252" r="1.1887608490877368" fill="#ffffff" fillOpacity="0.24600420893759434">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16734693877551018s" values="1.1887608490877368;0.5943804245438684;1.545389103814058;1.1887608490877368"></animate>
            </circle><circle cx="230.76160004205934" cy="579.9015958595986" r="0.6515821191736582" fill="#ffffff" fillOpacity="0.4942718640759315">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1683673469387755s" values="0.6515821191736582;0.3257910595868291;0.8470567549257556;0.6515821191736582"></animate>
            </circle><circle cx="103.55311779429303" cy="550.9054130565684" r="1.7753770645450304" fill="#ffffff" fillOpacity="0.5195592327995043">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1693877551020408s" values="1.7753770645450304;0.8876885322725152;2.3079901839085397;1.7753770645450304"></animate>
            </circle><circle cx="929.4983851133627" cy="832.8789884456647" r="1.2272311378912826" fill="#ffffff" fillOpacity="0.27365204496017614">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17040816326530608s" values="1.2272311378912826;0.6136155689456413;1.5954004792586673;1.2272311378912826"></animate>
            </circle><circle cx="1538.398827938161" cy="733.3515308498604" r="0.9627781349688881" fill="#ffffff" fillOpacity="0.3604492463518659">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1714285714285714s" values="0.9627781349688881;0.48138906748444404;1.2516115754595545;0.9627781349688881"></animate>
            </circle><circle cx="1203.9420669876847" cy="255.95335180433545" r="0.9628713610457259" fill="#ffffff" fillOpacity="0.7767848676124982">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1724489795918367s" values="0.9628713610457259;0.48143568052286295;1.2517327693594438;0.9628713610457259"></animate>
            </circle><circle cx="1544.010824502918" cy="923.9184172469068" r="1.0250796535811022" fill="#ffffff" fillOpacity="0.19425719426141852">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.173469387755102s" values="1.0250796535811022;0.5125398267905511;1.332603549655433;1.0250796535811022"></animate>
            </circle><circle cx="795.972758059005" cy="345.0834469877483" r="1.8665356075414767" fill="#ffffff" fillOpacity="0.6990551334409172">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17448979591836733s" values="1.8665356075414767;0.9332678037707384;2.4264962898039197;1.8665356075414767"></animate>
            </circle><circle cx="956.1587833354279" cy="734.4687975160475" r="0.9115584993516811" fill="#ffffff" fillOpacity="0.3594748858871679">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17551020408163265s" values="0.9115584993516811;0.45577924967584055;1.1850260491571856;0.9115584993516811"></animate>
            </circle><circle cx="1605.7322007393898" cy="32.542532136842794" r="1.8395096372443105" fill="#ffffff" fillOpacity="0.9716198847643813">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17653061224489794s" values="1.8395096372443105;0.9197548186221552;2.391362528417604;1.8395096372443105"></animate>
            </circle><circle cx="1319.7394724075018" cy="757.8863135419691" r="1.2140206119628802" fill="#ffffff" fillOpacity="0.3390526335389804">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17755102040816323s" values="1.2140206119628802;0.6070103059814401;1.5782267955517444;1.2140206119628802"></animate>
            </circle><circle cx="1481.4943367383385" cy="98.98469676709553" r="1.179169021774278" fill="#ffffff" fillOpacity="0.9136761365403236">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17857142857142855s" values="1.179169021774278;0.589584510887139;1.5329197283065616;1.179169021774278"></animate>
            </circle><circle cx="45.18525846610572" cy="483.19517665256393" r="1.4185015310078797" fill="#ffffff" fillOpacity="0.5786088575704385">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17959183673469384s" values="1.4185015310078797;0.7092507655039398;1.8440519903102437;1.4185015310078797"></animate>
            </circle><circle cx="903.4299970816119" cy="514.5701368809151" r="1.5368709799547753" fill="#ffffff" fillOpacity="0.5512469736503648">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18061224489795916s" values="1.5368709799547753;0.7684354899773876;1.997932273941208;1.5368709799547753"></animate>
            </circle><circle cx="340.4950253865127" cy="846.3832964362007" r="0.6645668148107997" fill="#ffffff" fillOpacity="0.261875032177732">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18163265306122447s" values="0.6645668148107997;0.33228340740539986;0.8639368592540396;0.6645668148107997"></animate>
            </circle><circle cx="685.6725080475115" cy="689.2107371803778" r="1.1921511438791044" fill="#ffffff" fillOpacity="0.3989441245519961">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1826530612244898s" values="1.1921511438791044;0.5960755719395522;1.5497964870428358;1.1921511438791044"></animate>
            </circle><circle cx="1001.8940955644189" cy="930.579519938154" r="1.405717408234982" fill="#ffffff" fillOpacity="0.18844809307719126">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18367346938775508s" values="1.405717408234982;0.702858704117491;1.8274326307054765;1.405717408234982"></animate>
            </circle><circle cx="980.4952538043137" cy="740.2919988327301" r="0.8012173697452425" fill="#ffffff" fillOpacity="0.3543965126458749">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1846938775510204s" values="0.8012173697452425;0.40060868487262125;1.0415825806688153;0.8012173697452425"></animate>
            </circle><circle cx="1381.8698314896053" cy="838.1512451970057" r="0.9456046115915538" fill="#ffffff" fillOpacity="0.2690541466305183">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18571428571428567s" values="0.9456046115915538;0.4728023057957769;1.22928599506902;0.9456046115915538"></animate>
            </circle><circle cx="1758.427788184401" cy="769.4829288683156" r="1.5992276356769977" fill="#ffffff" fillOpacity="0.3289393062194922">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18673469387755098s" values="1.5992276356769977;0.7996138178384988;2.078995926380097;1.5992276356769977"></animate>
            </circle><circle cx="939.7968374367455" cy="862.0261968294003" r="1.0015794955240456" fill="#ffffff" fillOpacity="0.24823296788133695">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1877551020408163s" values="1.0015794955240456;0.5007897477620228;1.3020533441812594;1.0015794955240456"></animate>
            </circle><circle cx="282.9495056081617" cy="89.02287828010003" r="1.8626942838573295" fill="#ffffff" fillOpacity="0.9223637689417733">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.18877551020408162s" values="1.8626942838573295;0.9313471419286647;2.421502569014528;1.8626942838573295"></animate>
            </circle><circle cx="1379.9785725480222" cy="418.800880350316" r="1.4889377843273883" fill="#ffffff" fillOpacity="0.6347666741130965">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1897959183673469s" values="1.4889377843273883;0.7444688921636942;1.935619119625605;1.4889377843273883"></animate>
            </circle><circle cx="1582.12703762609" cy="962.1185185116791" r="1.4637727495386892" fill="#ffffff" fillOpacity="0.16094315246074498">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19081632653061223s" values="1.4637727495386892;0.7318863747693446;1.902904574400296;1.4637727495386892"></animate>
            </circle><circle cx="229.42026915324658" cy="935.4222798107423" r="0.6922971027448996" fill="#ffffff" fillOpacity="0.18422475597900378">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19183673469387755s" values="0.6922971027448996;0.3461485513724498;0.8999862335683696;0.6922971027448996"></animate>
            </circle><circle cx="1181.2351305718316" cy="717.7712820185569" r="1.0850245908459726" fill="#ffffff" fillOpacity="0.37403667265823526">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1928571428571428s" values="1.0850245908459726;0.5425122954229863;1.4105319680997643;1.0850245908459726"></animate>
            </circle><circle cx="1531.6903704228923" cy="659.5168463634052" r="1.1860284384830602" fill="#ffffff" fillOpacity="0.4248399595667979">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19387755102040813s" values="1.1860284384830602;0.5930142192415301;1.5418369700279784;1.1860284384830602"></animate>
            </circle><circle cx="880.3982846294098" cy="967.241295501417" r="1.0522614009744489" fill="#ffffff" fillOpacity="0.15647561438829916">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19489795918367345s" values="1.0522614009744489;0.5261307004872244;1.3679398212667835;1.0522614009744489"></animate>
            </circle><circle cx="147.0411783478138" cy="498.99885170268425" r="1.1935123469762479" fill="#ffffff" fillOpacity="0.5648265828174265">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19591836734693874s" values="1.1935123469762479;0.5967561734881239;1.5515660510691223;1.1935123469762479"></animate>
            </circle><circle cx="16.116647959791557" cy="565.2811928179035" r="1.1123396848879614" fill="#ffffff" fillOpacity="0.5070222155657819">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19693877551020406s" values="1.1123396848879614;0.5561698424439807;1.44604159035435;1.1123396848879614"></animate>
            </circle><circle cx="1551.2390238290438" cy="748.6745559546038" r="1.8352433407859052" fill="#ffffff" fillOpacity="0.3470861430628456">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19795918367346937s" values="1.8352433407859052;0.9176216703929526;2.385816343021677;1.8352433407859052"></animate>
            </circle><circle cx="1726.0791748150343" cy="25.59083922430011" r="0.9084199564192655" fill="#ffffff" fillOpacity="0.9776824076532267">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1989795918367347s" values="0.9084199564192655;0.45420997820963277;1.1809459433450453;0.9084199564192655"></animate>
            </circle><circle cx="405.3726040346267" cy="492.7087875901244" r="1.7011572331419422" fill="#ffffff" fillOpacity="0.5703121038458218">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19999999999999996s" values="1.7011572331419422;0.8505786165709711;2.211504403084525;1.7011572331419422"></animate>
            </circle><circle cx="252.85630829942312" cy="43.27085390094427" r="1.3349706690076462" fill="#ffffff" fillOpacity="0.9622637902026648">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20102040816326527s" values="1.3349706690076462;0.6674853345038231;1.73546186970994;1.3349706690076462"></animate>
            </circle><circle cx="645.3184184452876" cy="639.8181433254382" r="0.9711458874018991" fill="#ffffff" fillOpacity="0.44201906105339694">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2020408163265306s" values="0.9711458874018991;0.48557294370094956;1.2624896536224688;0.9711458874018991"></animate>
            </circle><circle cx="289.1131667438339" cy="19.376698678824116" r="1.1607355189386415" fill="#ffffff" fillOpacity="0.9831017162684673">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20306122448979588s" values="1.1607355189386415;0.5803677594693207;1.508956174620234;1.1607355189386415"></animate>
            </circle><circle cx="1259.9561747957014" cy="232.2440542410059" r="0.8719749766262361" fill="#ffffff" fillOpacity="0.7974615806037739">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2040816326530612s" values="0.8719749766262361;0.43598748831311807;1.133567469614107;0.8719749766262361"></animate>
            </circle><circle cx="410.33691779912886" cy="625.1955455318473" r="1.0691624341099752" fill="#ffffff" fillOpacity="0.45477132657106345">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20510204081632652s" values="1.0691624341099752;0.5345812170549876;1.3899111643429678;1.0691624341099752"></animate>
            </circle><circle cx="1146.200090823745" cy="9.255462537497644" r="1.2583348202268136" fill="#ffffff" fillOpacity="0.9919283756940428">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20612244897959184s" values="1.2583348202268136;0.6291674101134068;1.6358352662948579;1.2583348202268136"></animate>
            </circle><circle cx="970.4110211450186" cy="1019.7917216199098" r="1.7031791360060466" fill="#ffffff" fillOpacity="0.11064675440124144">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2071428571428571s" values="1.7031791360060466;0.8515895680030233;2.2141328768078608;1.7031791360060466"></animate>
            </circle><circle cx="41.59453235101722" cy="596.0419046812235" r="1.594601183433962" fill="#ffffff" fillOpacity="0.4801960133593981">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20816326530612242s" values="1.594601183433962;0.797300591716981;2.0729815384641506;1.594601183433962"></animate>
            </circle><circle cx="1092.217119110654" cy="535.4750478957026" r="1.6814229013572841" fill="#ffffff" fillOpacity="0.533015946602585">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20918367346938774s" values="1.6814229013572841;0.8407114506786421;2.1858497717644694;1.6814229013572841"></animate>
            </circle><circle cx="1198.3029739060155" cy="53.03437370488402" r="1.6740195925602486" fill="#ffffff" fillOpacity="0.953749092699229">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21020408163265303s" values="1.6740195925602486;0.8370097962801243;2.176225470328323;1.6740195925602486"></animate>
            </circle><circle cx="1018.1888640220297" cy="1015.862418861866" r="0.6517603742313545" fill="#ffffff" fillOpacity="0.1140734719227913">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21122448979591832s" values="0.6517603742313545;0.32588018711567723;0.8472884865007608;0.6517603742313545"></animate>
            </circle><circle cx="799.3862916566834" cy="942.8668580092764" r="1.4103720850401509" fill="#ffffff" fillOpacity="0.17773239127097992">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21224489795918364s" values="1.4103720850401509;0.7051860425200754;1.8334837105521962;1.4103720850401509"></animate>
            </circle><circle cx="617.2523120903529" cy="192.51017267473802" r="1.5141197005326672" fill="#ffffff" fillOpacity="0.832113221504589">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21428571428571425s" values="1.5141197005326672;0.7570598502663336;1.9683556106924673;1.5141197005326672"></animate>
            </circle><circle cx="807.8252801776778" cy="622.4465489373198" r="1.6970675792130296" fill="#ffffff" fillOpacity="0.4571687073221049">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21530612244897956s" values="1.6970675792130296;0.8485337896065148;2.2061878529769388;1.6970675792130296"></animate>
            </circle><circle cx="1227.1755284944577" cy="826.5089325971643" r="1.1450132199997172" fill="#ffffff" fillOpacity="0.2792073262234033">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21632653061224488s" values="1.1450132199997172;0.5725066099998586;1.4885171859996325;1.1450132199997172"></animate>
            </circle><circle cx="982.6080677020874" cy="575.176433421995" r="0.6852791758165241" fill="#ffffff" fillOpacity="0.49839264527151605">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21734693877551015s" values="0.6852791758165241;0.34263958790826204;0.8908629285614813;0.6852791758165241"></animate>
            </circle><circle cx="509.80424736748" cy="989.8642482637612" r="1.132628737868306" fill="#ffffff" fillOpacity="0.13674629511881295">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21836734693877546s" values="1.132628737868306;0.566314368934153;1.472417359228798;1.132628737868306"></animate>
            </circle><circle cx="70.55867403345292" cy="449.5504407286591" r="1.108476157704804" fill="#ffffff" fillOpacity="0.60795019703896">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21938775510204078s" values="1.108476157704804;0.554238078852402;1.441019005016245;1.108476157704804"></animate>
            </circle><circle cx="1013.127094008265" cy="959.4245976578926" r="1.0078673396218492" fill="#ffffff" fillOpacity="0.16329250204253554">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2204081632653061s" values="1.0078673396218492;0.5039336698109246;1.310227541508404;1.0078673396218492"></animate>
            </circle><circle cx="150.656600377548" cy="1012.7544514427775" r="1.6934979879299363" fill="#ffffff" fillOpacity="0.11678390862548474">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2214285714285714s" values="1.6934979879299363;0.8467489939649682;2.2015473843089173;1.6934979879299363"></animate>
            </circle><circle cx="1278.305962570065" cy="574.5060173840703" r="0.7522763580012152" fill="#ffffff" fillOpacity="0.4989773104208689">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2224489795918367s" values="0.7522763580012152;0.3761381790006076;0.9779592654015797;0.7522763580012152"></animate>
            </circle><circle cx="45.11164139356293" cy="765.4125122084375" r="1.545034062074214" fill="#ffffff" fillOpacity="0.3324890881903161">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22346938775510203s" values="1.545034062074214;0.772517031037107;2.008544280696478;1.545034062074214"></animate>
            </circle><circle cx="850.5232902297198" cy="240.04735268692696" r="1.2347024261720883" fill="#ffffff" fillOpacity="0.7906563784707032">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2244897959183673s" values="1.2347024261720883;0.6173512130860441;1.6051131540237147;1.2347024261720883"></animate>
            </circle><circle cx="573.2467800628839" cy="192.93446179917183" r="1.029740751283024" fill="#ffffff" fillOpacity="0.8317432019193269">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2255102040816326s" values="1.029740751283024;0.514870375641512;1.3386629766679312;1.029740751283024"></animate>
            </circle><circle cx="1655.472757473228" cy="355.04045671653375" r="1.254305452531941" fill="#ffffff" fillOpacity="0.6903716947239531">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22653061224489793s" values="1.254305452531941;0.6271527262659705;1.6305970882915235;1.254305452531941"></animate>
            </circle><circle cx="1311.6562563593363" cy="388.65585695340656" r="1.714730903340387" fill="#ffffff" fillOpacity="0.6610559387034246">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22755102040816325s" values="1.714730903340387;0.8573654516701935;2.2291501743425033;1.714730903340387"></animate>
            </circle><circle cx="16.700481060438896" cy="451.81084226446313" r="1.6213977337787218" fill="#ffffff" fillOpacity="0.6059789166298286">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22857142857142854s" values="1.6213977337787218;0.8106988668893609;2.1078170539123384;1.6213977337787218"></animate>
            </circle><circle cx="1681.5818852951274" cy="864.2676102932372" r="0.834908651795927" fill="#ffffff" fillOpacity="0.24627824683729313">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22959183673469385s" values="0.834908651795927;0.4174543258979635;1.085381247334705;0.834908651795927"></animate>
            </circle><circle cx="202.69372449669956" cy="114.90319283927352" r="1.383881045833654" fill="#ffffff" fillOpacity="0.8997937271750521">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23061224489795917s" values="1.383881045833654;0.691940522916827;1.7990453595837501;1.383881045833654"></animate>
            </circle><circle cx="1658.2050706919451" cy="350.3888299162594" r="0.7961196684887016" fill="#ffffff" fillOpacity="0.6944283460032622">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23163265306122444s" values="0.7961196684887016;0.3980598342443508;1.0349555690353123;0.7961196684887016"></animate>
            </circle><circle cx="1227.9936617994151" cy="494.61839783156387" r="1.1031773671117002" fill="#ffffff" fillOpacity="0.5686467460771245">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23265306122448975s" values="1.1031773671117002;0.5515886835558501;1.4341305772452104;1.1031773671117002"></animate>
            </circle><circle cx="846.5897788621244" cy="1003.3229721375121" r="1.6301290081775348" fill="#ffffff" fillOpacity="0.12500903592658827">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23367346938775507s" values="1.6301290081775348;0.8150645040887674;2.119167710630795;1.6301290081775348"></animate>
            </circle><circle cx="1271.257857935927" cy="486.1526638740165" r="0.882971570063324" fill="#ffffff" fillOpacity="0.5760296535982414">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2346938775510204s" values="0.882971570063324;0.441485785031662;1.1478630410823214;0.882971570063324"></animate>
            </circle><circle cx="1566.0354657661474" cy="115.33619298286153" r="1.0085230546777617" fill="#ffffff" fillOpacity="0.8994161107707602">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23571428571428568s" values="1.0085230546777617;0.5042615273388809;1.3110799710810903;1.0085230546777617"></animate>
            </circle><circle cx="537.7465877618874" cy="206.7490920910061" r="0.9100558999234061" fill="#ffffff" fillOpacity="0.8196955592229598">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.236734693877551s" values="0.9100558999234061;0.45502794996170304;1.183072669900428;0.9100558999234061"></animate>
            </circle><circle cx="1515.2232794234312" cy="41.741415365732024" r="1.071640432642917" fill="#ffffff" fillOpacity="0.9635976028787221">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23775510204081632s" values="1.071640432642917;0.5358202163214585;1.3931325624357922;1.071640432642917"></animate>
            </circle><circle cx="1228.4345756735452" cy="552.3193115494718" r="0.7758275422192564" fill="#ffffff" fillOpacity="0.5183261817882514">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23877551020408158s" values="0.7758275422192564;0.3879137711096282;1.0085758048850333;0.7758275422192564"></animate>
            </circle><circle cx="1045.249472511605" cy="758.309548448478" r="0.6617490278744992" fill="#ffffff" fillOpacity="0.3386835333298157">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2397959183673469s" values="0.6617490278744992;0.3308745139372496;0.860273736236849;0.6617490278744992"></animate>
            </circle><circle cx="1317.733654929654" cy="144.8978487800035" r="0.9235772951692192" fill="#ffffff" fillOpacity="0.8736355969941829">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24081632653061222s" values="0.9235772951692192;0.4617886475846096;1.200650483719985;0.9235772951692192"></animate>
            </circle><circle cx="1534.621306753113" cy="1002.337084976235" r="0.792956604021868" fill="#ffffff" fillOpacity="0.12586882124165552">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2418367346938775s" values="0.792956604021868;0.396478302010934;1.0308435852284283;0.792956604021868"></animate>
            </circle><circle cx="1030.329633371813" cy="100.21050141412283" r="1.2220412644612073" fill="#ffffff" fillOpacity="0.9126071208597766">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24285714285714283s" values="1.2220412644612073;0.6110206322306037;1.5886536437995695;1.2220412644612073"></animate>
            </circle><circle cx="1194.7647251864057" cy="88.09301751109666" r="1.5488997045674793" fill="#ffffff" fillOpacity="0.9231746940310204">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24387755102040815s" values="1.5488997045674793;0.7744498522837396;2.013569615937723;1.5488997045674793"></animate>
            </circle><circle cx="977.8477178948308" cy="1014.5554212395655" r="0.7801744779413979" fill="#ffffff" fillOpacity="0.11521329543061151">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24489795918367346s" values="0.7801744779413979;0.39008723897069897;1.0142268213238173;0.7801744779413979"></animate>
            </circle><circle cx="1038.9303380402446" cy="318.6381264378894" r="1.143625877823352" fill="#ffffff" fillOpacity="0.7221179129902127">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24591836734693873s" values="1.143625877823352;0.571812938911676;1.4867136411703574;1.143625877823352"></animate>
            </circle><circle cx="1459.016274626731" cy="694.8888178525872" r="1.2998065260352607" fill="#ffffff" fillOpacity="0.39399231001227863">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24693877551020404s" values="1.2998065260352607;0.6499032630176304;1.689748483845839;1.2998065260352607"></animate>
            </circle><circle cx="1103.967375001456" cy="849.8798390853217" r="1.7448486319192056" fill="#ffffff" fillOpacity="0.2588257217279171">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24795918367346936s" values="1.7448486319192056;0.8724243159596028;2.268303221494967;1.7448486319192056"></animate>
            </circle><circle cx="1112.503438037739" cy="153.84302056826718" r="1.0733236613552033" fill="#ffffff" fillOpacity="0.8658345750858134">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24897959183673465s" values="1.0733236613552033;0.5366618306776016;1.3953207597617643;1.0733236613552033"></animate>
            </circle><circle cx="1152.6742445899101" cy="493.5004543662121" r="1.357449505828374" fill="#ffffff" fillOpacity="0.5696216967736523">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24999999999999997s" values="1.357449505828374;0.678724752914187;1.7646843575768862;1.357449505828374"></animate>
            </circle><circle cx="993.0660292650182" cy="382.13038644076784" r="1.171460417638198" fill="#ffffff" fillOpacity="0.6667467560109583">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.25102040816326526s" values="1.171460417638198;0.585730208819099;1.5228985429296573;1.171460417638198"></animate>
            </circle><circle cx="1451.3261564095442" cy="862.492065304606" r="1.807385245691909" fill="#ffffff" fillOpacity="0.24782668723435528">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2520408163265306s" values="1.807385245691909;0.9036926228459545;2.3496008193994817;1.807385245691909"></animate>
            </circle><circle cx="853.3877572281777" cy="918.3123577787762" r="0.9340921518880062" fill="#ffffff" fillOpacity="0.19914619961153235">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2530612244897959s" values="0.9340921518880062;0.4670460759440031;1.2143197974544082;0.9340921518880062"></animate>
            </circle><circle cx="904.6072391588822" cy="890.8686135907823" r="0.8346315775340777" fill="#ffffff" fillOpacity="0.2230796974498992">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.25408163265306116s" values="0.8346315775340777;0.41731578876703884;1.085021050794301;0.8346315775340777"></animate>
            </circle><circle cx="541.2245001098025" cy="234.29812046716611" r="0.7106758208221926" fill="#ffffff" fillOpacity="0.7956702437786342">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2551020408163265s" values="0.7106758208221926;0.3553379104110963;0.9238785670688504;0.7106758208221926"></animate>
            </circle><circle cx="1057.2038597688309" cy="486.2952360616327" r="1.5023281902684007" fill="#ffffff" fillOpacity="0.575905317388111">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2561224489795918s" values="1.5023281902684007;0.7511640951342003;1.953026647348921;1.5023281902684007"></animate>
            </circle><circle cx="520.7735937442986" cy="106.47257074034299" r="0.9398618968708261" fill="#ffffff" fillOpacity="0.9071460138892357">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2571428571428571s" values="0.9398618968708261;0.46993094843541305;1.221820465932074;0.9398618968708261"></animate>
            </circle><circle cx="1265.7459969653953" cy="255.63950489537467" r="1.3855560460484708" fill="#ffffff" fillOpacity="0.7770585713121733">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.25816326530612244s" values="1.3855560460484708;0.6927780230242354;1.8012228598630122;1.3855560460484708"></animate>
            </circle><circle cx="115.54874089711554" cy="551.8402098175519" r="1.7446405866391457" fill="#ffffff" fillOpacity="0.5187440030660885">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.25918367346938775s" values="1.7446405866391457;0.8723202933195728;2.2680327626308894;1.7446405866391457"></animate>
            </circle><circle cx="533.8479363290317" cy="985.5149385351635" r="1.3484162327820575" fill="#ffffff" fillOpacity="0.14053929778910157">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.260204081632653s" values="1.3484162327820575;0.6742081163910287;1.7529411026166748;1.3484162327820575"></animate>
            </circle><circle cx="693.7256443140723" cy="950.9865051287154" r="1.6092093877768345" fill="#ffffff" fillOpacity="0.17065130366681797">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26122448979591834s" values="1.6092093877768345;0.8046046938884173;2.091972204109885;1.6092093877768345"></animate>
            </circle><circle cx="531.6397502095662" cy="635.7915421661068" r="1.671537875794419" fill="#ffffff" fillOpacity="0.4455306318318837">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26224489795918365s" values="1.671537875794419;0.8357689378972095;2.172999238532745;1.671537875794419"></animate>
            </circle><circle cx="108.95332019391486" cy="919.1849397274489" r="1.6926768274634845" fill="#ffffff" fillOpacity="0.198385226981876">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2632653061224489s" values="1.6926768274634845;0.8463384137317422;2.2004798757025297;1.6926768274634845"></animate>
            </circle><circle cx="13.255942337243845" cy="325.0749567524879" r="1.2471720287071686" fill="#ffffff" fillOpacity="0.7165043981809699">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26428571428571423s" values="1.2471720287071686;0.6235860143535843;1.6213236373193192;1.2471720287071686"></animate>
            </circle><circle cx="947.3219690160131" cy="398.52815800783856" r="1.833387641264387" fill="#ffffff" fillOpacity="0.6524463738303733">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26530612244897955s" values="1.833387641264387;0.9166938206321935;2.383403933643703;1.833387641264387"></animate>
            </circle><circle cx="213.23569395502324" cy="479.0100488498633" r="1.7385577957565823" fill="#ffffff" fillOpacity="0.5822586783286076">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26734693877551013s" values="1.7385577957565823;0.8692788978782912;2.260125134483557;1.7385577957565823"></animate>
            </circle><circle cx="690.74488574638" cy="702.6302382318139" r="1.6155734765649779" fill="#ffffff" fillOpacity="0.3872410713094646">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26836734693877545s" values="1.6155734765649779;0.8077867382824889;2.100245519534471;1.6155734765649779"></animate>
            </circle><circle cx="1277.7802393202564" cy="219.68433674141443" r="1.2515828765360824" fill="#ffffff" fillOpacity="0.8084148226092316">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26938775510204077s" values="1.2515828765360824;0.6257914382680412;1.627057739496907;1.2515828765360824"></animate>
            </circle><circle cx="1006.67385829854" cy="873.6872229675373" r="0.7333658899898142" fill="#ffffff" fillOpacity="0.238063468342264">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2704081632653061s" values="0.7333658899898142;0.3666829449949071;0.9533756569867585;0.7333658899898142"></animate>
            </circle><circle cx="740.4062487465033" cy="2.6588550041031045" r="1.6661742083504212" fill="#ffffff" fillOpacity="0.9976812311010729">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2714285714285714s" values="1.6661742083504212;0.8330871041752106;2.1660264708555474;1.6661742083504212"></animate>
            </circle><circle cx="1647.5024918527322" cy="53.24012968317753" r="1.8158321250600618" fill="#ffffff" fillOpacity="0.9535696543460661">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2724489795918367s" values="1.8158321250600618;0.9079160625300309;2.3605817625780805;1.8158321250600618"></animate>
            </circle><circle cx="211.93641196216555" cy="188.05775743201545" r="1.3110459370960403" fill="#ffffff" fillOpacity="0.8359961417744051">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.27346938775510204s" values="1.3110459370960403;0.6555229685480202;1.7043597182248524;1.3110459370960403"></animate>
            </circle><circle cx="378.91127309331847" cy="119.23627857034101" r="0.7836845570064601" fill="#ffffff" fillOpacity="0.8960148733398189">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2744897959183673s" values="0.7836845570064601;0.39184227850323006;1.0187899241083982;0.7836845570064601"></animate>
            </circle><circle cx="922.8305949430612" cy="641.6257010530176" r="1.1955242218200417" fill="#ffffff" fillOpacity="0.4404427025700428">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2755102040816326s" values="1.1955242218200417;0.5977621109100208;1.5541814883660543;1.1955242218200417"></animate>
            </circle><circle cx="1711.3516389106026" cy="890.3631506294811" r="1.1029127997622143" fill="#ffffff" fillOpacity="0.22352050817196417">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.27653061224489794s" values="1.1029127997622143;0.5514563998811072;1.4337866396908787;1.1029127997622143"></animate>
            </circle><circle cx="1390.2412054660074" cy="459.62571517929797" r="0.8285144079593194" fill="#ffffff" fillOpacity="0.5991636204831704">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2775510204081632s" values="0.8285144079593194;0.4142572039796597;1.0770687303471154;0.8285144079593194"></animate>
            </circle><circle cx="1445.733429868586" cy="906.5976034077349" r="1.7273244194266923" fill="#ffffff" fillOpacity="0.20936255516767305">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2785714285714285s" values="1.7273244194266923;0.8636622097133462;2.2455217452547003;1.7273244194266923"></animate>
            </circle><circle cx="1604.134812344437" cy="219.68983929894827" r="1.3747520681331191" fill="#ffffff" fillOpacity="0.8084100238671962">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.27959183673469384s" values="1.3747520681331191;0.6873760340665596;1.7871776885730548;1.3747520681331191"></animate>
            </circle><circle cx="60.04498074710433" cy="344.10815348597" r="0.6454202683519127" fill="#ffffff" fillOpacity="0.6999056800994449">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.28061224489795916s" values="0.6454202683519127;0.32271013417595634;0.8390463488574865;0.6454202683519127"></animate>
            </circle><circle cx="1628.7620929254526" cy="43.07253035690518" r="1.745905232977029" fill="#ffffff" fillOpacity="0.9624367467817687">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2816326530612244s" values="1.745905232977029;0.8729526164885145;2.269676802870138;1.745905232977029"></animate>
            </circle><circle cx="1365.4430580092483" cy="896.1952945583554" r="1.8819884198590382" fill="#ffffff" fillOpacity="0.21843433614096913">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.28265306122448974s" values="1.8819884198590382;0.9409942099295191;2.44658494581675;1.8819884198590382"></animate>
            </circle><circle cx="909.1051684214628" cy="614.924434998099" r="1.7093571811114368" fill="#ffffff" fillOpacity="0.4637286904086346">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.28367346938775506s" values="1.7093571811114368;0.8546785905557184;2.2221643354448677;1.7093571811114368"></animate>
            </circle><circle cx="1065.4071871287872" cy="441.7683317770689" r="1.5433992896832731" fill="#ffffff" fillOpacity="0.6147369199618585">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2846938775510204s" values="1.5433992896832731;0.7716996448416366;2.006419076588255;1.5433992896832731"></animate>
            </circle><circle cx="110.12835355835605" cy="848.9888381975534" r="0.7351542856657216" fill="#ffffff" fillOpacity="0.2596027573858546">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2857142857142857s" values="0.7351542856657216;0.3675771428328608;0.9557005713654381;0.7351542856657216"></animate>
            </circle><circle cx="948.7997883222345" cy="711.2521303034297" r="0.8263006383703152" fill="#ffffff" fillOpacity="0.37972197938654395">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.286734693877551s" values="0.8263006383703152;0.4131503191851576;1.0741908298814098;0.8263006383703152"></animate>
            </circle><circle cx="897.29913528174" cy="18.925718834978497" r="1.1152289969126576" fill="#ffffff" fillOpacity="0.983495012643914">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2877551020408163s" values="1.1152289969126576;0.5576144984563288;1.449797695986455;1.1152289969126576"></animate>
            </circle><circle cx="1219.2579700401527" cy="921.1581209870019" r="1.1007016171935091" fill="#ffffff" fillOpacity="0.19666442937180068">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2887755102040816s" values="1.1007016171935091;0.5503508085967546;1.4309121023515619;1.1007016171935091"></animate>
            </circle><circle cx="1366.0943679140917" cy="210.2499220601382" r="1.5855811285671986" fill="#ffffff" fillOpacity="0.8166425098312747">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2897959183673469s" values="1.5855811285671986;0.7927905642835993;2.061255467137358;1.5855811285671986"></animate>
            </circle><circle cx="1708.6286473111802" cy="282.9001147843818" r="1.3214183247212312" fill="#ffffff" fillOpacity="0.7532847836182717">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.29081632653061223s" values="1.3214183247212312;0.6607091623606156;1.7178438221376007;1.3214183247212312"></animate>
            </circle><circle cx="216.40238113411942" cy="871.0092476138403" r="1.17931111949837" fill="#ffffff" fillOpacity="0.24039891196467414">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2918367346938775s" values="1.17931111949837;0.589655559749185;1.5331044553478812;1.17931111949837"></animate>
            </circle><circle cx="674.7551571200763" cy="280.3600133772281" r="1.0902882100680895" fill="#ffffff" fillOpacity="0.7554999883338126">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2928571428571428s" values="1.0902882100680895;0.5451441050340448;1.4173746730885164;1.0902882100680895"></animate>
            </circle><circle cx="1143.218368070133" cy="97.64191042850152" r="1.5093407110263093" fill="#ffffff" fillOpacity="0.9148471711379347">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.29387755102040813s" values="1.5093407110263093;0.7546703555131546;1.9621429243342021;1.5093407110263093"></animate>
            </circle><circle cx="930.4599946399453" cy="505.8234906659462" r="0.8425955926496754" fill="#ffffff" fillOpacity="0.558874862791326">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2948979591836734s" values="0.8425955926496754;0.4212977963248377;1.0953742704445781;0.8425955926496754"></animate>
            </circle><circle cx="767.0085999606732" cy="87.37807163579289" r="1.740310683985154" fill="#ffffff" fillOpacity="0.9237981933408782">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2959183673469387s" values="1.740310683985154;0.870155341992577;2.2624038891807006;1.740310683985154"></animate>
            </circle><circle cx="1476.364526428012" cy="524.6094286230573" r="1.064334297439757" fill="#ffffff" fillOpacity="0.5424917773636129">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.29693877551020403s" values="1.064334297439757;0.5321671487198785;1.3836345866716842;1.064334297439757"></animate>
            </circle><circle cx="1033.5697036380525" cy="78.31873350417449" r="0.8516408647131058" fill="#ffffff" fillOpacity="0.931698778920778">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.29795918367346935s" values="0.8516408647131058;0.4258204323565529;1.1071331241270377;0.8516408647131058"></animate>
            </circle><circle cx="366.27901990097735" cy="467.4144347084378" r="0.7179286992815556" fill="#ffffff" fillOpacity="0.5923711325217113">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2989795918367346s" values="0.7179286992815556;0.3589643496407778;0.9333073090660222;0.7179286992815556"></animate>
            </circle><circle cx="229.89398755929298" cy="91.79485831618389" r="1.551233500494766" fill="#ffffff" fillOpacity="0.9199463444917001">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.29999999999999993s" values="1.551233500494766;0.775616750247383;2.016603550643196;1.551233500494766"></animate>
            </circle><circle cx="941.7793577761395" cy="774.4174145252471" r="0.8176444466349169" fill="#ffffff" fillOpacity="0.3246359757047264">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.30102040816326525s" values="0.8176444466349169;0.40882222331745843;1.062937780625392;0.8176444466349169"></animate>
            </circle><circle cx="1270.7513441947774" cy="47.14692337525048" r="0.8114608844260345" fill="#ffffff" fillOpacity="0.9588834970564676">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.30204081632653057s" values="0.8114608844260345;0.40573044221301724;1.054899149753845;0.8114608844260345"></animate>
            </circle><circle cx="818.1922111482655" cy="953.0954595526013" r="1.6428206284656046" fill="#ffffff" fillOpacity="0.16881209922738263">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3030612244897959s" values="1.6428206284656046;0.8214103142328023;2.135666817005286;1.6428206284656046"></animate>
            </circle><circle cx="509.02661561222044" cy="778.8065812787133" r="0.8166804767297511" fill="#ffffff" fillOpacity="0.32080821400112214">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3040816326530612s" values="0.8166804767297511;0.40834023836487554;1.0616846197486765;0.8166804767297511"></animate>
            </circle><circle cx="130.67429829472732" cy="949.0786176867023" r="0.9943280527752769" fill="#ffffff" fillOpacity="0.172315158994155">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3051020408163265s" values="0.9943280527752769;0.49716402638763846;1.2926264686078601;0.9943280527752769"></animate>
            </circle><circle cx="1534.8965152956903" cy="47.84951774758214" r="1.7029755177463262" fill="#ffffff" fillOpacity="0.9582707694061784">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3061224489795918s" values="1.7029755177463262;0.8514877588731631;2.213868173070224;1.7029755177463262"></animate>
            </circle><circle cx="687.7538073268513" cy="360.90352505226497" r="1.104734936067038" fill="#ffffff" fillOpacity="0.6852585537334898">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3071428571428571s" values="1.104734936067038;0.552367468033519;1.4361554168871495;1.104734936067038"></animate>
            </circle><circle cx="201.02999842961057" cy="929.2396149701182" r="1.8320734997245753" fill="#ffffff" fillOpacity="0.18961661485164114">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3081632653061224s" values="1.8320734997245753;0.9160367498622877;2.381695549641948;1.8320734997245753"></animate>
            </circle><circle cx="891.7984832529845" cy="858.379031488445" r="0.8430764961880521" fill="#ffffff" fillOpacity="0.2514136353298445">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3091836734693877s" values="0.8430764961880521;0.42153824809402607;1.095999445044468;0.8430764961880521"></animate>
            </circle><circle cx="1102.1166252398202" cy="160.25469594910513" r="0.6426530879918393" fill="#ffffff" fillOpacity="0.8602429977188036">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.310204081632653s" values="0.6426530879918393;0.32132654399591964;0.8354490143893911;0.6426530879918393"></animate>
            </circle><circle cx="326.51677011802343" cy="551.080123265715" r="0.7814487017057061" fill="#ffffff" fillOpacity="0.519406869245016">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3112244897959183s" values="0.7814487017057061;0.39072435085285306;1.015883312217418;0.7814487017057061"></animate>
            </circle><circle cx="297.27676646643334" cy="332.9836617407592" r="1.5092986153596" fill="#ffffff" fillOpacity="0.70960727173771">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.31224489795918364s" values="1.5092986153596;0.7546493076798;1.96208819996748;1.5092986153596"></animate>
            </circle><circle cx="628.4678468653499" cy="85.47854087711482" r="1.2967620241671534" fill="#ffffff" fillOpacity="0.9254547608629813">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3132653061224489s" values="1.2967620241671534;0.6483810120835767;1.6857906314172995;1.2967620241671534"></animate>
            </circle><circle cx="391.48615525370406" cy="865.4874534801629" r="1.803180906837813" fill="#ffffff" fillOpacity="0.2452144301045091">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3142857142857142s" values="1.803180906837813;0.9015904534189065;2.344135178889157;1.803180906837813"></animate>
            </circle><circle cx="1456.5537472904816" cy="132.82150825323748" r="1.2202307931760679" fill="#ffffff" fillOpacity="0.8841672893140371">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.31530612244897954s" values="1.2202307931760679;0.6101153965880339;1.5863000311288882;1.2202307931760679"></animate>
            </circle><circle cx="952.527780936357" cy="114.06081339578441" r="0.7024766815363526" fill="#ffffff" fillOpacity="0.9005283604106531">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.31632653061224486s" values="0.7024766815363526;0.3512383407681763;0.9132196859972583;0.7024766815363526"></animate>
            </circle><circle cx="754.8563474195882" cy="713.8573646655868" r="0.6614792199865988" fill="#ffffff" fillOpacity="0.3774499726753603">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3173469387755102s" values="0.6614792199865988;0.3307396099932994;0.8599229859825784;0.6614792199865988"></animate>
            </circle><circle cx="1468.8939332489979" cy="309.84669032539887" r="1.145741084791853" fill="#ffffff" fillOpacity="0.7297848630883149">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3183673469387755s" values="1.145741084791853;0.5728705423959265;1.4894634102294089;1.145741084791853"></animate>
            </circle><circle cx="336.6870288669743" cy="318.6333672567456" r="1.4052814756024516" fill="#ffffff" fillOpacity="0.7221220634388846">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3193877551020408s" values="1.4052814756024516;0.7026407378012258;1.8268659182831872;1.4052814756024516"></animate>
            </circle><circle cx="904.9198932720237" cy="846.913462471075" r="1.2842535174250775" fill="#ffffff" fillOpacity="0.26141267807755086">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3204081632653061s" values="1.2842535174250775;0.6421267587125388;1.669529572652601;1.2842535174250775"></animate>
            </circle><circle cx="715.9343280911431" cy="682.3298168637689" r="0.7604002259341601" fill="#ffffff" fillOpacity="0.4049449271536899">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3214285714285714s" values="0.7604002259341601;0.38020011296708006;0.9885202937144082;0.7604002259341601"></animate>
            </circle><circle cx="630.6339452987752" cy="82.99202250905547" r="1.3083436297685433" fill="#ffffff" fillOpacity="0.9276232361839633">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3224489795918367s" values="1.3083436297685433;0.6541718148842717;1.7008467186991063;1.3083436297685433"></animate>
            </circle><circle cx="1291.2789470318887" cy="307.45582640322846" r="1.4347165486717774" fill="#ffffff" fillOpacity="0.7318699188343938">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.323469387755102s" values="1.4347165486717774;0.7173582743358887;1.8651315132733108;1.4347165486717774"></animate>
            </circle><circle cx="595.3684802354862" cy="995.6892257308077" r="1.4314051095612115" fill="#ffffff" fillOpacity="0.13166637290917932">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3244897959183673s" values="1.4314051095612115;0.7157025547806057;1.860826642429575;1.4314051095612115"></animate>
            </circle><circle cx="261.597745973717" cy="868.0751295997723" r="1.4975129509500036" fill="#ffffff" fillOpacity="0.24295773581415211">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3255102040816326s" values="1.4975129509500036;0.7487564754750018;1.9467668362350048;1.4975129509500036"></animate>
            </circle><circle cx="1417.626691206168" cy="193.75838804135515" r="0.8730112411059535" fill="#ffffff" fillOpacity="0.8310246615918414">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.32653061224489793s" values="0.8730112411059535;0.43650562055297676;1.1349146134377397;0.8730112411059535"></animate>
            </circle><circle cx="1491.4864035826542" cy="830.1166708739797" r="1.0203124910167893" fill="#ffffff" fillOpacity="0.2760610428424596">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3275510204081632s" values="1.0203124910167893;0.5101562455083947;1.3264062383218262;1.0203124910167893"></animate>
            </circle><circle cx="431.3522736107555" cy="809.9654133565948" r="1.0150001415909364" fill="#ffffff" fillOpacity="0.29363481393320223">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3285714285714285s" values="1.0150001415909364;0.5075000707954682;1.3195001840682175;1.0150001415909364"></animate>
            </circle><circle cx="668.5677140320963" cy="249.40001726126746" r="0.8049106367996849" fill="#ffffff" fillOpacity="0.782499984946569">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.32959183673469383s" values="0.8049106367996849;0.40245531839984244;1.0463838278395905;0.8049106367996849"></animate>
            </circle><circle cx="1406.36736023672" cy="569.6263261312223" r="1.4081564094317827" fill="#ffffff" fillOpacity="0.5032328551181201">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.33061224489795915s" values="1.4081564094317827;0.7040782047158913;1.8306033322613176;1.4081564094317827"></animate>
            </circle><circle cx="1166.7504697854183" cy="186.2767819428463" r="1.7658123849311738" fill="#ffffff" fillOpacity="0.8375493180730992">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.33163265306122447s" values="1.7658123849311738;0.8829061924655869;2.295556100410526;1.7658123849311738"></animate>
            </circle><circle cx="885.0297948131918" cy="924.0901881663995" r="1.8847718006428271" fill="#ffffff" fillOpacity="0.19410739404093072">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3326530612244898s" values="1.8847718006428271;0.9423859003214136;2.4502033408356754;1.8847718006428271"></animate>
            </circle><circle cx="1288.8091832513933" cy="157.87931320943588" r="1.044060662605981" fill="#ffffff" fillOpacity="0.8623145524336315">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.33367346938775505s" values="1.044060662605981;0.5220303313029905;1.3572788613877753;1.044060662605981"></animate>
            </circle><circle cx="343.52283246225255" cy="385.9085592669163" r="1.1177296120670062" fill="#ffffff" fillOpacity="0.6634518378486195">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.33469387755102037s" values="1.1177296120670062;0.5588648060335031;1.4530484956871081;1.1177296120670062"></animate>
            </circle><circle cx="1531.0923521949492" cy="147.157921968991" r="1.6778853595796128" fill="#ffffff" fillOpacity="0.8716646029340195">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3357142857142857s" values="1.6778853595796128;0.8389426797898064;2.181250967453497;1.6778853595796128"></animate>
            </circle><circle cx="224.6277040762659" cy="559.5696208527112" r="1.8543661721557494" fill="#ffffff" fillOpacity="0.5120032376284496">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.336734693877551s" values="1.8543661721557494;0.9271830860778747;2.4106760238024743;1.8543661721557494"></animate>
            </circle><circle cx="466.4075687838624" cy="380.06414085014484" r="0.6965752481430262" fill="#ffffff" fillOpacity="0.6685487143748736">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.33775510204081627s" values="0.6965752481430262;0.3482876240715131;0.905547822585934;0.6965752481430262"></animate>
            </circle><circle cx="1306.6794627814033" cy="210.83488313340416" r="1.0555817489418322" fill="#ffffff" fillOpacity="0.8161323693604032">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3387755102040816s" values="1.0555817489418322;0.5277908744709161;1.372256273624382;1.0555817489418322"></animate>
            </circle><circle cx="1006.392103718965" cy="244.44361431925026" r="1.8058532185242653" fill="#ffffff" fillOpacity="0.7868224293727468">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3397959183673469s" values="1.8058532185242653;0.9029266092621326;2.347609184081545;1.8058532185242653"></animate>
            </circle><circle cx="16.350535272567406" cy="455.8722251903739" r="1.7717131675426443" fill="#ffffff" fillOpacity="0.6024370129153717">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.34081632653061217s" values="1.7717131675426443;0.8858565837713221;2.3032271178054375;1.7717131675426443"></animate>
            </circle><circle cx="234.74633971406166" cy="815.7579371498199" r="1.218506470582608" fill="#ffffff" fillOpacity="0.2885831943460873">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3418367346938775s" values="1.218506470582608;0.609253235291304;1.5840584117573906;1.218506470582608"></animate>
            </circle><circle cx="1481.4232746948223" cy="1028.8877852274252" r="0.9859580532147398" fill="#ffffff" fillOpacity="0.10271414079003618">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3428571428571428s" values="0.9859580532147398;0.4929790266073699;1.2817454691791619;0.9859580532147398"></animate>
            </circle><circle cx="1435.5843439849327" cy="818.1610989838366" r="1.4782768818949026" fill="#ffffff" fillOpacity="0.2864874136768867">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3438775510204081s" values="1.4782768818949026;0.7391384409474513;1.9217599464633734;1.4782768818949026"></animate>
            </circle><circle cx="453.55637913068523" cy="559.3587466173846" r="1.0521455028681816" fill="#ffffff" fillOpacity="0.5121871395778623">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3448979591836734s" values="1.0521455028681816;0.5260727514340908;1.3677891537286362;1.0521455028681816"></animate>
            </circle><circle cx="434.7734381579379" cy="714.280694748934" r="1.6301145863803088" fill="#ffffff" fillOpacity="0.37708078946313894">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3459183673469387s" values="1.6301145863803088;0.8150572931901544;2.1191489622944015;1.6301145863803088"></animate>
            </circle><circle cx="375.01318531008627" cy="14.94359971236072" r="1.5153426222465871" fill="#ffffff" fillOpacity="0.9869677909485226">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.346938775510204s" values="1.5153426222465871;0.7576713111232936;1.9699454089205632;1.5153426222465871"></animate>
            </circle><circle cx="320.0820698898651" cy="888.0377310075734" r="1.1106596023629742" fill="#ffffff" fillOpacity="0.22554849040037206">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.34795918367346934s" values="1.1106596023629742;0.5553298011814871;1.4438574830718665;1.1106596023629742"></animate>
            </circle><circle cx="66.98922634896164" cy="691.7428117199055" r="1.8011800900545665" fill="#ffffff" fillOpacity="0.3967359200117103">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.34897959183673466s" values="1.8011800900545665;0.9005900450272832;2.3415341170709363;1.8011800900545665"></animate>
            </circle><circle cx="861.2341602729704" cy="217.3984730982172" r="1.6777009737576412" fill="#ffffff" fillOpacity="0.810408308344578">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.35s" values="1.6777009737576412;0.8388504868788206;2.1810112658849334;1.6777009737576412"></animate>
            </circle><circle cx="1182.5346816421516" cy="858.5855939379189" r="1.5361787640364415" fill="#ffffff" fillOpacity="0.25123349365879166">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3510204081632653s" values="1.5361787640364415;0.7680893820182207;1.997032393247374;1.5361787640364415"></animate>
            </circle><circle cx="301.3868152459285" cy="129.8413245219584" r="0.7831570223951744" fill="#ffffff" fillOpacity="0.8867662867541061">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.35204081632653056s" values="0.7831570223951744;0.3915785111975872;1.0181041291137267;0.7831570223951744"></animate>
            </circle><circle cx="1334.8451971379886" cy="600.4142972708512" r="0.7643022849291281" fill="#ffffff" fillOpacity="0.47638288028704845">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3530612244897959s" values="0.7643022849291281;0.38215114246456405;0.9935929704078665;0.7643022849291281"></animate>
            </circle><circle cx="551.8771290664614" cy="981.4078273486739" r="1.7667903451110363" fill="#ffffff" fillOpacity="0.14412108080057512">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3540816326530612s" values="1.7667903451110363;0.8833951725555181;2.2968274486443474;1.7667903451110363"></animate>
            </circle><circle cx="197.78549952553897" cy="727.3877253412412" r="0.6973924437300488" fill="#ffffff" fillOpacity="0.36565023952798736">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.35510204081632646s" values="0.6973924437300488;0.3486962218650244;0.9066101768490635;0.6973924437300488"></animate>
            </circle><circle cx="118.10146826899708" cy="353.95407100061055" r="1.0330971900623014" fill="#ffffff" fillOpacity="0.6913191241273744">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3561224489795918s" values="1.0330971900623014;0.5165485950311507;1.3430263470809918;1.0330971900623014"></animate>
            </circle><circle cx="130.05958350907486" cy="533.6205753696419" r="0.8652604166113136" fill="#ffffff" fillOpacity="0.5346332191543821">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3571428571428571s" values="0.8652604166113136;0.4326302083056568;1.1248385415947078;0.8652604166113136"></animate>
            </circle><circle cx="488.2447846577493" cy="198.3327945137037" r="1.7272096241802792" fill="#ffffff" fillOpacity="0.82703535362177">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3581632653061224s" values="1.7272096241802792;0.8636048120901396;2.245372511434363;1.7272096241802792"></animate>
            </circle><circle cx="635.1936668897984" cy="420.77339589262175" r="0.7280765839157686" fill="#ffffff" fillOpacity="0.6330464570703881">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3591836734693877s" values="0.7280765839157686;0.3640382919578843;0.9464995590904992;0.7280765839157686"></animate>
            </circle><circle cx="1522.7251467374203" cy="318.8781130522089" r="0.7393426670156208" fill="#ffffff" fillOpacity="0.7219086223381899">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.360204081632653s" values="0.7393426670156208;0.3696713335078104;0.961145467120307;0.7393426670156208"></animate>
            </circle><circle cx="1543.9753910176535" cy="532.8740250802631" r="1.6126798966899414" fill="#ffffff" fillOpacity="0.5352842804532589">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3612244897959183s" values="1.6126798966899414;0.8063399483449707;2.096483865696924;1.6126798966899414"></animate>
            </circle><circle cx="537.2472302947484" cy="939.8601243044117" r="1.4674256163483514" fill="#ffffff" fillOpacity="0.18035454275778054">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.36224489795918363s" values="1.4674256163483514;0.7337128081741757;1.907653301252857;1.4674256163483514"></animate>
            </circle><circle cx="1016.7318530205727" cy="770.5596182835404" r="0.9075125409221452" fill="#ffffff" fillOpacity="0.32800033289226127">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.36326530612244895s" values="0.9075125409221452;0.4537562704610726;1.1797663031987888;0.9075125409221452"></animate>
            </circle><circle cx="1638.6068632971137" cy="493.7342174801512" r="1.4580240935970221" fill="#ffffff" fillOpacity="0.5694178335928914">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.36428571428571427s" values="1.4580240935970221;0.7290120467985111;1.8954313216761287;1.4580240935970221"></animate>
            </circle><circle cx="1649.1035394252701" cy="884.916902362694" r="1.632286942001779" fill="#ffffff" fillOpacity="0.22827014328834824">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3653061224489796s" values="1.632286942001779;0.8161434710008895;2.1219730246023127;1.632286942001779"></animate>
            </circle><circle cx="1195.4409247136728" cy="63.382131962585355" r="1.0578104858853012" fill="#ffffff" fillOpacity="0.94472488491635">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.36632653061224485s" values="1.0578104858853012;0.5289052429426506;1.3751536316508917;1.0578104858853012"></animate>
            </circle><circle cx="796.4453282900898" cy="391.83795095981407" r="0.9479659707285997" fill="#ffffff" fillOpacity="0.6582808567210924">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.36734693877551017s" values="0.9479659707285997;0.47398298536429984;1.2323557619471797;0.9479659707285997"></animate>
            </circle><circle cx="461.55998677049377" cy="947.5853579215617" r="1.1614528159988762" fill="#ffffff" fillOpacity="0.1736174204172427">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3683673469387755s" values="1.1614528159988762;0.5807264079994381;1.5098886607985391;1.1614528159988762"></animate>
            </circle><circle cx="991.3497108635178" cy="501.3770650146004" r="0.6474467516842949" fill="#ffffff" fillOpacity="0.5627525595802904">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3693877551020408s" values="0.6474467516842949;0.32372337584214744;0.8416807771895833;0.6474467516842949"></animate>
            </circle><circle cx="475.7576852991998" cy="849.6536720494809" r="0.6847298159967627" fill="#ffffff" fillOpacity="0.2590229604219644">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3704081632653061s" values="0.6847298159967627;0.3423649079983814;0.8901487607957916;0.6847298159967627"></animate>
            </circle><circle cx="129.79432549776388" cy="852.6057815952134" r="1.488576008190179" fill="#ffffff" fillOpacity="0.25644844628324415">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.37142857142857133s" values="1.488576008190179;0.7442880040950896;1.935148810647233;1.488576008190179"></animate>
            </circle><circle cx="75.23737251339679" cy="283.38291004398764" r="1.7639583135836676" fill="#ffffff" fillOpacity="0.7528637412407084">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.37244897959183665s" values="1.7639583135836676;0.8819791567918338;2.293145807658768;1.7639583135836676"></animate>
            </circle><circle cx="481.82065759032844" cy="744.3840785170806" r="1.2553691456983591" fill="#ffffff" fillOpacity="0.35082783850254595">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.37346938775510197s" values="1.2553691456983591;0.6276845728491796;1.631979889407867;1.2553691456983591"></animate>
            </circle><circle cx="314.0524493355596" cy="944.4039346393535" r="0.9031490330814247" fill="#ffffff" fillOpacity="0.17639191746568014">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3744897959183673s" values="0.9031490330814247;0.45157451654071235;1.1740937430058522;0.9031490330814247"></animate>
            </circle><circle cx="1092.3040755413758" cy="277.31451091018505" r="0.7868500345151088" fill="#ffffff" fillOpacity="0.7581559497876293">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3755102040816326s" values="0.7868500345151088;0.3934250172575544;1.0229050448696415;0.7868500345151088"></animate>
            </circle><circle cx="1659.1066611613858" cy="741.1970501027575" r="1.1171854376099923" fill="#ffffff" fillOpacity="0.35360722374759523">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3765306122448979s" values="1.1171854376099923;0.5585927188049962;1.45234106889299;1.1171854376099923"></animate>
            </circle><circle cx="739.0704191609954" cy="785.88003212407" r="1.5658584660142556" fill="#ffffff" fillOpacity="0.3146395068685436">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.37755102040816324s" values="1.5658584660142556;0.7829292330071278;2.0356160058185324;1.5658584660142556"></animate>
            </circle><circle cx="765.6888740447088" cy="237.8641616400797" r="0.7371220163051349" fill="#ffffff" fillOpacity="0.7925603241510933">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3785714285714285s" values="0.7371220163051349;0.3685610081525674;0.9582586211966754;0.7371220163051349"></animate>
            </circle><circle cx="133.7841349002532" cy="573.7867698474012" r="1.7149406244086962" fill="#ffffff" fillOpacity="0.49960456117959207">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3795918367346938s" values="1.7149406244086962;0.8574703122043481;2.2294228117313053;1.7149406244086962"></animate>
            </circle><circle cx="1397.8077619950282" cy="703.6943412498714" r="1.744375935552463" fill="#ffffff" fillOpacity="0.3863130744913913">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.38061224489795914s" values="1.744375935552463;0.8721879677762315;2.2676887162182022;1.744375935552463"></animate>
            </circle><circle cx="1616.4782184138496" cy="421.15027514283236" r="1.1639065691136867" fill="#ffffff" fillOpacity="0.6327177833056694">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.38163265306122446s" values="1.1639065691136867;0.5819532845568434;1.5130785398477928;1.1639065691136867"></animate>
            </circle><circle cx="365.4396078490198" cy="123.9364902671783" r="0.8783519277093383" fill="#ffffff" fillOpacity="0.8919158515111817">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3826530612244898s" values="0.8783519277093383;0.43917596385466917;1.1418575060221399;0.8783519277093383"></animate>
            </circle><circle cx="1585.2965296825662" cy="208.50448568557408" r="0.9659878988004954" fill="#ffffff" fillOpacity="0.8181646927160691">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3836734693877551s" values="0.9659878988004954;0.4829939494002477;1.2557842684406442;0.9659878988004954"></animate>
            </circle><circle cx="437.83609596009137" cy="848.7728303436922" r="1.851533854852159" fill="#ffffff" fillOpacity="0.2597911363281754">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3846938775510204s" values="1.851533854852159;0.9257669274260795;2.4069940113078068;1.851533854852159"></animate>
            </circle><circle cx="312.3714761681135" cy="245.4702422474299" r="1.3394096205452433" fill="#ffffff" fillOpacity="0.7859271143191018">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3857142857142856s" values="1.3394096205452433;0.6697048102726216;1.7412325067088164;1.3394096205452433"></animate>
            </circle><circle cx="1001.2073829342876" cy="947.8604404797801" r="0.6953322231224893" fill="#ffffff" fillOpacity="0.1733775228374011">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.38673469387755094s" values="0.6953322231224893;0.34766611156124466;0.9039318900592361;0.6953322231224893"></animate>
            </circle><circle cx="310.24272412412023" cy="546.558131819006" r="0.7812430699120374" fill="#ffffff" fillOpacity="0.5233504664369134">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.38775510204081626s" values="0.7812430699120374;0.3906215349560187;1.0156159908856486;0.7812430699120374"></animate>
            </circle><circle cx="1265.6210599442948" cy="800.423261106528" r="1.586969393493135" fill="#ffffff" fillOpacity="0.3019564583373302">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3887755102040816s" values="1.586969393493135;0.7934846967465675;2.0630602115410754;1.586969393493135"></animate>
            </circle><circle cx="142.8228510619127" cy="130.23208085584145" r="0.6681849661396857" fill="#ffffff" fillOpacity="0.8864255108815337">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3897959183673469s" values="0.6681849661396857;0.33409248306984285;0.8686404559815915;0.6681849661396857"></animate>
            </circle><circle cx="335.5389594924055" cy="346.87282075281865" r="0.8479918822033441" fill="#ffffff" fillOpacity="0.6974946330644024">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3908163265306122s" values="0.8479918822033441;0.42399594110167205;1.1023894468643474;0.8479918822033441"></animate>
            </circle><circle cx="1431.8898831563772" cy="17.945751400473796" r="1.2900009852020324" fill="#ffffff" fillOpacity="0.9843496354065635">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3918367346938775s" values="1.2900009852020324;0.6450004926010162;1.6770012807626422;1.2900009852020324"></animate>
            </circle><circle cx="627.6810899888361" cy="354.68400276568156" r="0.6613572828427097" fill="#ffffff" fillOpacity="0.6906825557276034">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3928571428571428s" values="0.6613572828427097;0.33067864142135484;0.8597644676955226;0.6613572828427097"></animate>
            </circle><circle cx="508.9457738381391" cy="994.7908697458803" r="1.3953888360571678" fill="#ffffff" fillOpacity="0.13244982289603463">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3938775510204081s" values="1.3953888360571678;0.6976944180285839;1.8140054868743183;1.3953888360571678"></animate>
            </circle><circle cx="525.2986607647605" cy="461.79497274606143" r="0.8661351042134137" fill="#ffffff" fillOpacity="0.5972718260935511">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.39489795918367343s" values="0.8661351042134137;0.43306755210670683;1.1259756354774377;0.8661351042134137"></animate>
            </circle><circle cx="1308.5689880287794" cy="73.7910809104086" r="1.5384871436530516" fill="#ffffff" fillOpacity="0.9356473131595274">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.39591836734693875s" values="1.5384871436530516;0.7692435718265258;2.000033286748967;1.5384871436530516"></animate>
            </circle><circle cx="1240.5623877973328" cy="733.1649831131889" r="1.8877633155482412" fill="#ffffff" fillOpacity="0.3606119333315213">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.39693877551020407s" values="1.8877633155482412;0.9438816577741206;2.4540923102127135;1.8877633155482412"></animate>
            </circle><circle cx="1419.1570030499818" cy="237.54197746782165" r="1.2196425946039609" fill="#ffffff" fillOpacity="0.7928412987199229">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3979591836734694s" values="1.2196425946039609;0.6098212973019804;1.5855353729851491;1.2196425946039609"></animate>
            </circle><circle cx="708.8568461351015" cy="344.8084649625357" r="0.9485535862354013" fill="#ffffff" fillOpacity="0.6992949433466259">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3989795918367346s" values="0.9485535862354013;0.47427679311770066;1.2331196621060216;0.9485535862354013"></animate>
            </circle><circle cx="1002.2850172742858" cy="240.9792521228102" r="1.3693770213562908" fill="#ffffff" fillOpacity="0.7898436754742935">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3999999999999999s" values="1.3693770213562908;0.6846885106781454;1.7801901277631782;1.3693770213562908"></animate>
            </circle><circle cx="1099.338725139723" cy="739.8458031811368" r="1.1542488204511712" fill="#ffffff" fillOpacity="0.35478563676063646">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.40102040816326523s" values="1.1542488204511712;0.5771244102255856;1.5005234665865226;1.1542488204511712"></animate>
            </circle><circle cx="1355.9855087631904" cy="991.6361193528064" r="1.3218054803293466" fill="#ffffff" fillOpacity="0.13520105870394789">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.40204081632653055s" values="1.3218054803293466;0.6609027401646733;1.7183471244281507;1.3218054803293466"></animate>
            </circle><circle cx="928.8324724502618" cy="744.3819382679775" r="1.4573739154777092" fill="#ffffff" fillOpacity="0.3508297049988569">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.40306122448979587s" values="1.4573739154777092;0.7286869577388546;1.894586090121022;1.4573739154777092"></animate>
            </circle><circle cx="1007.4739951084341" cy="336.0096839038083" r="1.850957434688186" fill="#ffffff" fillOpacity="0.7069682989210974">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4040816326530612s" values="1.850957434688186;0.925478717344093;2.406244665094642;1.850957434688186"></animate>
            </circle><circle cx="1285.0432158997887" cy="1022.0478205601393" r="1.789714495089446" fill="#ffffff" fillOpacity="0.10867922625569251">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4051020408163265s" values="1.789714495089446;0.894857247544723;2.32662884361628;1.789714495089446"></animate>
            </circle><circle cx="529.6507628103449" cy="439.03875163635433" r="0.6943223597100215" fill="#ffffff" fillOpacity="0.6171173677589932">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.40612244897959177s" values="0.6943223597100215;0.34716117985501077;0.902619067623028;0.6943223597100215"></animate>
            </circle><circle cx="184.65923123597406" cy="211.52530513507887" r="0.760579170777709" fill="#ffffff" fillOpacity="0.8155302571496406">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4071428571428571s" values="0.760579170777709;0.3802895853888545;0.9887529220110217;0.760579170777709"></animate>
            </circle><circle cx="116.35052999981717" cy="406.87359399118145" r="0.7431276306193015" fill="#ffffff" fillOpacity="0.645168377333272">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4081632653061224s" values="0.7431276306193015;0.37156381530965077;0.966065919805092;0.7431276306193015"></animate>
            </circle><circle cx="1080.5377441247908" cy="966.4322000518619" r="1.8648160256900332" fill="#ffffff" fillOpacity="0.1571812208850042">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4091836734693877s" values="1.8648160256900332;0.9324080128450166;2.4242608333970432;1.8648160256900332"></animate>
            </circle><circle cx="1585.910043378823" cy="995.7601991366948" r="1.6386211620578115" fill="#ffffff" fillOpacity="0.13160447749706847">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.41020408163265304s" values="1.6386211620578115;0.8193105810289057;2.130207510675155;1.6386211620578115"></animate>
            </circle><circle cx="699.6100053150845" cy="723.6861547838797" r="1.3843458830049828" fill="#ffffff" fillOpacity="0.3688783533861515">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.41122448979591836s" values="1.3843458830049828;0.6921729415024914;1.7996496479064779;1.3843458830049828"></animate>
            </circle><circle cx="559.6974432839124" cy="502.2231226739305" r="1.4637125006625291" fill="#ffffff" fillOpacity="0.5620147185983164">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4122448979591837s" values="1.4637125006625291;0.7318562503312646;1.9028262508612879;1.4637125006625291"></animate>
            </circle><circle cx="275.0081808564097" cy="792.7171489349649" r="0.6824027528828437" fill="#ffffff" fillOpacity="0.30867690499857714">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4132653061224489s" values="0.6824027528828437;0.34120137644142184;0.8871235787476969;0.6824027528828437"></animate>
            </circle><circle cx="1625.3076835387446" cy="548.9911497835487" r="0.9078734533548294" fill="#ffffff" fillOpacity="0.5212286484445796">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4142857142857142s" values="0.9078734533548294;0.4539367266774147;1.1802354893612783;0.9078734533548294"></animate>
            </circle><circle cx="664.6491046695776" cy="515.3425785855081" r="1.7865383301208897" fill="#ffffff" fillOpacity="0.5505733326289173">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4153061224489795s" values="1.7865383301208897;0.8932691650604448;2.322499829157157;1.7865383301208897"></animate>
            </circle><circle cx="1235.1111537219138" cy="1006.9927453243388" r="0.9855754293719418" fill="#ffffff" fillOpacity="0.12180865233342549">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.41632653061224484s" values="0.9855754293719418;0.4927877146859709;1.2812480581835244;0.9855754293719418"></animate>
            </circle><circle cx="1709.2205649248688" cy="905.1850675532322" r="1.4758761745609508" fill="#ffffff" fillOpacity="0.21059441783148353">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.41734693877551016s" values="1.4758761745609508;0.7379380872804754;1.9186390269292362;1.4758761745609508"></animate>
            </circle><circle cx="1632.0231273951088" cy="614.0953744229784" r="1.7197936163735155" fill="#ffffff" fillOpacity="0.46445170835205374">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4183673469387755s" values="1.7197936163735155;0.8598968081867577;2.23573170128557;1.7197936163735155"></animate>
            </circle><circle cx="922.3892094097837" cy="845.1283531104827" r="1.799149999087603" fill="#ffffff" fillOpacity="0.26296945949667205">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4193877551020408s" values="1.799149999087603;0.8995749995438015;2.338894998813884;1.799149999087603"></animate>
            </circle><circle cx="1482.4598335590367" cy="786.848375779132" r="0.8077429817992606" fill="#ffffff" fillOpacity="0.31379502112285007">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.42040816326530606s" values="0.8077429817992606;0.4038714908996303;1.050065876339039;0.8077429817992606"></animate>
            </circle><circle cx="1670.8589528925038" cy="740.8990896335661" r="1.1102661542531187" fill="#ffffff" fillOpacity="0.3538670729939831">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4214285714285714s" values="1.1102661542531187;0.5551330771265593;1.4433460005290544;1.1102661542531187"></animate>
            </circle><circle cx="304.5244359025754" cy="603.0313320141408" r="1.1878733500174241" fill="#ffffff" fillOpacity="0.47410058254580745">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.42244897959183664s" values="1.1878733500174241;0.5939366750087121;1.5442353550226513;1.1878733500174241"></animate>
            </circle><circle cx="1092.5059556693068" cy="23.55367004140733" r="0.6691095318505242" fill="#ffffff" fillOpacity="0.9794590086848192">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.42346938775510196s" values="0.6691095318505242;0.3345547659252621;0.8698423914056815;0.6691095318505242"></animate>
            </circle><circle cx="492.6705548949619" cy="59.62853392792016" r="1.796446320431576" fill="#ffffff" fillOpacity="0.9479983715744882">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4244897959183673s" values="1.796446320431576;0.898223160215788;2.335380216561049;1.796446320431576"></animate>
            </circle><circle cx="622.4859988869372" cy="89.11557754741195" r="1.7874300438776005" fill="#ffffff" fillOpacity="0.9222829265574896">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4255102040816326s" values="1.7874300438776005;0.8937150219388003;2.3236590570408806;1.7874300438776005"></animate>
            </circle><circle cx="690.8539121138591" cy="810.6809887166806" r="1.426887138102618" fill="#ffffff" fillOpacity="0.2930107656540576">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4265306122448979s" values="1.426887138102618;0.713443569051309;1.8549532795334034;1.426887138102618"></animate>
            </circle><circle cx="1039.1910360919967" cy="921.6094474621596" r="0.6797488902400782" fill="#ffffff" fillOpacity="0.19627083070160506">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4275510204081632s" values="0.6797488902400782;0.3398744451200391;0.8836735573121017;0.6797488902400782"></animate>
            </circle><circle cx="237.87646810373514" cy="60.299736804910104" r="0.8229650118381936" fill="#ffffff" fillOpacity="0.947413020228276">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4285714285714285s" values="0.8229650118381936;0.4114825059190968;1.0698545153896517;0.8229650118381936"></animate>
            </circle><circle cx="361.5421917109135" cy="427.67867787339065" r="0.7904126740205818" fill="#ffffff" fillOpacity="0.6270244088313454">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4295918367346938s" values="0.7904126740205818;0.3952063370102909;1.0275364762267565;0.7904126740205818"></animate>
            </circle><circle cx="146.25789862194284" cy="174.03675901043985" r="1.5818700165000787" fill="#ffffff" fillOpacity="0.848223756676942">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43061224489795913s" values="1.5818700165000787;0.7909350082500394;2.0564310214501025;1.5818700165000787"></animate>
            </circle><circle cx="356.43456170339175" cy="238.7424140413157" r="0.6404815212390588" fill="#ffffff" fillOpacity="0.7917944063593177">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43163265306122445s" values="0.6404815212390588;0.3202407606195294;0.8326259776107764;0.6404815212390588"></animate>
            </circle><circle cx="636.307265567847" cy="926.7125943967478" r="1.4105651184057153" fill="#ffffff" fillOpacity="0.19182041186330134">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43265306122448977s" values="1.4105651184057153;0.7052825592028577;1.83373465392743;1.4105651184057153"></animate>
            </circle><circle cx="1018.4858757649888" cy="605.5536640845806" r="1.717278487384433" fill="#ffffff" fillOpacity="0.4719008743448424">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4336734693877551s" values="1.717278487384433;0.8586392436922164;2.232462033599763;1.717278487384433"></animate>
            </circle><circle cx="661.458832623242" cy="292.44548046187845" r="1.4584453051742359" fill="#ffffff" fillOpacity="0.7449603368065013">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4346938775510203s" values="1.4584453051742359;0.7292226525871179;1.8959788967265068;1.4584453051742359"></animate>
            </circle><circle cx="1564.4861057900825" cy="488.81578303358884" r="1.1234376445901573" fill="#ffffff" fillOpacity="0.5737071659590796">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4357142857142856s" values="1.1234376445901573;0.5617188222950786;1.4604689379672045;1.1234376445901573"></animate>
            </circle><circle cx="1367.489880547409" cy="487.640615498362" r="1.110926859478252" fill="#ffffff" fillOpacity="0.5747320213677076">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43673469387755093s" values="1.110926859478252;0.555463429739126;1.4442049173217277;1.110926859478252"></animate>
            </circle><circle cx="1575.508381770128" cy="299.8173057459867" r="1.1275318665582932" fill="#ffffff" fillOpacity="0.7385314194075697">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43775510204081625s" values="1.1275318665582932;0.5637659332791466;1.4657914265257812;1.1275318665582932"></animate>
            </circle><circle cx="333.91609895529524" cy="544.6756392683948" r="1.5297325093952008" fill="#ffffff" fillOpacity="0.5249921750566325">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.43877551020408156s" values="1.5297325093952008;0.7648662546976004;1.988652262213761;1.5297325093952008"></animate>
            </circle><circle cx="1476.1305416633186" cy="950.3535990095345" r="1.7198579364348714" fill="#ffffff" fillOpacity="0.17120325667773156">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4397959183673469s" values="1.7198579364348714;0.8599289682174357;2.235815317365333;1.7198579364348714"></animate>
            </circle><circle cx="684.7807438868135" cy="48.749447958748156" r="1.1287018410584613" fill="#ffffff" fillOpacity="0.9574859465476033">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4408163265306122s" values="1.1287018410584613;0.5643509205292306;1.4673123933759997;1.1287018410584613"></animate>
            </circle><circle cx="21.63216726132081" cy="349.65313967464317" r="1.7673565267091995" fill="#ffffff" fillOpacity="0.695069936330253">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.44183673469387746s" values="1.7673565267091995;0.8836782633545998;2.2975634847219593;1.7673565267091995"></animate>
            </circle><circle cx="1075.5921930406755" cy="508.799285583164" r="1.8114500820783102" fill="#ffffff" fillOpacity="0.5562796928053803">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4428571428571428s" values="1.8114500820783102;0.9057250410391551;2.3548851067018033;1.8114500820783102"></animate>
            </circle><circle cx="1656.5129747133385" cy="476.45990167456466" r="1.4984562241059651" fill="#ffffff" fillOpacity="0.584482643888461">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4438775510204081s" values="1.4984562241059651;0.7492281120529826;1.9479930913377548;1.4984562241059651"></animate>
            </circle><circle cx="190.4589564596086" cy="808.6397886822688" r="1.0727454785373167" fill="#ffffff" fillOpacity="0.29479088196313774">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4448979591836734s" values="1.0727454785373167;0.5363727392686584;1.3945691220985117;1.0727454785373167"></animate>
            </circle><circle cx="148.72968109902916" cy="710.7216263192944" r="0.7795429185767737" fill="#ffffff" fillOpacity="0.3801846282099177">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.44591836734693874s" values="0.7795429185767737;0.38977145928838686;1.0134057941498058;0.7795429185767737"></animate>
            </circle><circle cx="1469.348398408378" cy="959.4703655933614" r="0.7854302141783911" fill="#ffffff" fillOpacity="0.16325258814532434">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.44693877551020406s" values="0.7854302141783911;0.39271510708919555;1.0210592784319084;0.7854302141783911"></animate>
            </circle><circle cx="770.4984009789719" cy="252.70201101108285" r="0.8563002644345105" fill="#ffffff" fillOpacity="0.7796203392345208">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4479591836734694s" values="0.8563002644345105;0.42815013221725523;1.1131903437648636;0.8563002644345105"></animate>
            </circle><circle cx="1032.9201838099727" cy="684.8324691241091" r="0.7787423928831898" fill="#ffffff" fillOpacity="0.40276238157781175">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4489795918367346s" values="0.7787423928831898;0.3893711964415949;1.0123651107481468;0.7787423928831898"></animate>
            </circle><circle cx="532.558837348744" cy="717.0106002526451" r="1.8206854916038628" fill="#ffffff" fillOpacity="0.3747000579192049">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4499999999999999s" values="1.8206854916038628;0.9103427458019314;2.3668911390850216;1.8206854916038628"></animate>
            </circle><circle cx="735.3939689862992" cy="103.30527294262758" r="1.0114893590520104" fill="#ffffff" fillOpacity="0.9099081922011969">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4510204081632652s" values="1.0114893590520104;0.5057446795260052;1.3149361667676136;1.0114893590520104"></animate>
            </circle><circle cx="1429.1678179343046" cy="47.482281073112254" r="0.6378664342501503" fill="#ffffff" fillOpacity="0.9585910339478673">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.45204081632653054s" values="0.6378664342501503;0.31893321712507516;0.8292263645251955;0.6378664342501503"></animate>
            </circle><circle cx="379.7474982747617" cy="146.48307089751577" r="1.578721270778051" fill="#ffffff" fillOpacity="0.8722531358451897">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.45306122448979586s" values="1.578721270778051;0.7893606353890255;2.0523376520114662;1.578721270778051"></animate>
            </circle><circle cx="947.5942553496479" cy="889.1319469311352" r="1.0553820009015928" fill="#ffffff" fillOpacity="0.22459423232749842">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4540816326530612s" values="1.0553820009015928;0.5276910004507964;1.3719966011720708;1.0553820009015928"></animate>
            </circle><circle cx="182.52142345434945" cy="24.866751372378516" r="1.2413805049996507" fill="#ffffff" fillOpacity="0.9783138796171118">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4551020408163265s" values="1.2413805049996507;0.6206902524998253;1.613794656499546;1.2413805049996507"></animate>
            </circle><circle cx="1508.3931339015544" cy="646.0652681022249" r="1.5456258262133713" fill="#ffffff" fillOpacity="0.43657098712015274">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.45612244897959175s" values="1.5456258262133713;0.7728129131066857;2.0093135740773826;1.5456258262133713"></animate>
            </circle><circle cx="1247.8776846585154" cy="676.6919210692575" r="1.3132726872945155" fill="#ffffff" fillOpacity="0.40986169674192663">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4571428571428571s" values="1.3132726872945155;0.6566363436472578;1.7072544934828702;1.3132726872945155"></animate>
            </circle><circle cx="596.704069486184" cy="673.7631903619589" r="1.4408257842050574" fill="#ffffff" fillOpacity="0.41241582235875673">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4581632653061224s" values="1.4408257842050574;0.7204128921025287;1.8730735194665746;1.4408257842050574"></animate>
            </circle><circle cx="1754.6985598727529" cy="599.1922410778512" r="1.5124407347673996" fill="#ffffff" fillOpacity="0.4774486269669902">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4591836734693877s" values="1.5124407347673996;0.7562203673836998;1.9661729551976195;1.5124407347673996"></animate>
            </circle><circle cx="601.1880843833839" cy="120.80438507261333" r="1.735161108615665" fill="#ffffff" fillOpacity="0.8946473385994652">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46020408163265303s" values="1.735161108615665;0.8675805543078325;2.2557094412003647;1.735161108615665"></animate>
            </circle><circle cx="893.2994337604274" cy="397.45039748152163" r="1.5568781290502904" fill="#ffffff" fillOpacity="0.6533862812661149">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46122448979591835s" values="1.5568781290502904;0.7784390645251452;2.0239415677653776;1.5568781290502904"></animate>
            </circle><circle cx="219.68985178950652" cy="45.968485869281594" r="1.2212619274846879" fill="#ffffff" fillOpacity="0.9599112041837661">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46224489795918366s" values="1.2212619274846879;0.6106309637423439;1.5876405057300942;1.2212619274846879"></animate>
            </circle><circle cx="267.5283752800471" cy="808.2056617185016" r="0.6739073818275427" fill="#ffffff" fillOpacity="0.2951694810594463">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46326530612244887s" values="0.6739073818275427;0.33695369091377136;0.8760795963758056;0.6739073818275427"></animate>
            </circle><circle cx="1341.4361219795856" cy="508.13836259604255" r="1.8254334823490996" fill="#ffffff" fillOpacity="0.5568560791313584">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4642857142857142s" values="1.8254334823490996;0.9127167411745498;2.3730635270538296;1.8254334823490996"></animate>
            </circle><circle cx="189.42769059188345" cy="242.74623538132224" r="1.146955986898004" fill="#ffffff" fillOpacity="0.7883027017023352">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4653061224489795s" values="1.146955986898004;0.573477993449002;1.4910427829674051;1.146955986898004"></animate>
            </circle><circle cx="138.48048777818013" cy="945.2914135455231" r="0.6915404028033707" fill="#ffffff" fillOpacity="0.17561795330332286">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4663265306122448s" values="0.6915404028033707;0.34577020140168535;0.8990025236443819;0.6915404028033707"></animate>
            </circle><circle cx="939.2547939917876" cy="515.722825006656" r="1.526538315009564" fill="#ffffff" fillOpacity="0.5502417223779164">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46734693877551015s" values="1.526538315009564;0.763269157504782;1.984499809512433;1.526538315009564"></animate>
            </circle><circle cx="1593.9688297159803" cy="53.12746121877618" r="1.6752562032268992" fill="#ffffff" fillOpacity="0.9536679117278115">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46836734693877546s" values="1.6752562032268992;0.8376281016134496;2.177833064194969;1.6752562032268992"></animate>
            </circle><circle cx="1468.5741149102425" cy="329.83005366450743" r="1.0078106507224114" fill="#ffffff" fillOpacity="0.7123575113390923">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4693877551020408s" values="1.0078106507224114;0.5039053253612057;1.3101538459391349;1.0078106507224114"></animate>
            </circle><circle cx="93.78224789274651" cy="277.6326626604361" r="1.2632602898313543" fill="#ffffff" fillOpacity="0.7578784918658987">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47040816326530605s" values="1.2632602898313543;0.6316301449156771;1.6422383767807607;1.2632602898313543"></animate>
            </circle><circle cx="653.4614502128825" cy="810.41400377906" r="1.7851799671302637" fill="#ffffff" fillOpacity="0.293243601355471">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47142857142857136s" values="1.7851799671302637;0.8925899835651319;2.320733957269343;1.7851799671302637"></animate>
            </circle><circle cx="122.59685343047823" cy="166.49436851577153" r="1.598311913134595" fill="#ffffff" fillOpacity="0.8548014228060132">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4724489795918367s" values="1.598311913134595;0.7991559565672975;2.077805487074974;1.598311913134595"></animate>
            </circle><circle cx="583.7427893353527" cy="62.95366527331086" r="1.6713835446472138" fill="#ffffff" fillOpacity="0.9450985477267637">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.473469387755102s" values="1.6713835446472138;0.8356917723236069;2.172798608041378;1.6713835446472138"></animate>
            </circle><circle cx="81.38294745827416" cy="923.5948599943428" r="1.82451165201634" fill="#ffffff" fillOpacity="0.19453936628400342">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4744897959183673s" values="1.82451165201634;0.91225582600817;2.371865147621242;1.82451165201634"></animate>
            </circle><circle cx="1697.378476735776" cy="30.87816143978909" r="1.863340351382627" fill="#ffffff" fillOpacity="0.9730713708373933">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47551020408163264s" values="1.863340351382627;0.9316701756913135;2.422342456797415;1.863340351382627"></animate>
            </circle><circle cx="288.8213014397275" cy="464.36408182751376" r="1.3509532690693464" fill="#ffffff" fillOpacity="0.5950313239876335">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47653061224489796s" values="1.3509532690693464;0.6754766345346732;1.7562392497901504;1.3509532690693464"></animate>
            </circle><circle cx="1710.807516074922" cy="632.2536031625469" r="0.7456054005871273" fill="#ffffff" fillOpacity="0.44861604375359276">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47755102040816316s" values="0.7456054005871273;0.37280270029356366;0.9692870207632656;0.7456054005871273"></animate>
            </circle><circle cx="981.7786642509838" cy="464.31367609290055" r="1.8454458325501673" fill="#ffffff" fillOpacity="0.5950752824771216">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4785714285714285s" values="1.8454458325501673;0.9227229162750836;2.3990795823152173;1.8454458325501673"></animate>
            </circle><circle cx="1299.5061768169116" cy="936.1068177366492" r="1.1656660991911723" fill="#ffffff" fillOpacity="0.1836277752296664">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4795918367346938s" values="1.1656660991911723;0.5828330495955861;1.515365928948524;1.1656660991911723"></animate>
            </circle><circle cx="874.8173107555513" cy="437.5565225476491" r="1.8497655182079857" fill="#ffffff" fillOpacity="0.6184100094061199">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4806122448979591s" values="1.8497655182079857;0.9248827591039929;2.4046951736703814;1.8497655182079857"></animate>
            </circle><circle cx="630.7264383001284" cy="776.6611841314215" r="1.3666527500820194" fill="#ffffff" fillOpacity="0.3226791998853883">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.48163265306122444s" values="1.3666527500820194;0.6833263750410097;1.7766485751066252;1.3666527500820194"></animate>
            </circle><circle cx="945.0361532776063" cy="219.01199668646993" r="1.113611448953392" fill="#ffffff" fillOpacity="0.8090011656804041">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.48265306122448975s" values="1.113611448953392;0.556805724476696;1.4476948836394095;1.113611448953392"></animate>
            </circle><circle cx="1538.1512833026795" cy="421.8333602125273" r="1.1270962813884926" fill="#ffffff" fillOpacity="0.6321220695820983">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.483673469387755s" values="1.1270962813884926;0.5635481406942463;1.4652251658050404;1.1270962813884926"></animate>
            </circle><circle cx="1032.8954436174051" cy="506.51245905223647" r="1.587589197424565" fill="#ffffff" fillOpacity="0.5582740182683985">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.48469387755102034s" values="1.587589197424565;0.7937945987122825;2.063865956651935;1.587589197424565"></animate>
            </circle><circle cx="927.3697372998646" cy="68.17993411008561" r="0.6609124577338459" fill="#ffffff" fillOpacity="0.9405407551365532">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.48571428571428565s" values="0.6609124577338459;0.33045622886692294;0.8591861950539996;0.6609124577338459"></animate>
            </circle><circle cx="1538.6324244197658" cy="20.03284033649095" r="1.5181581768620167" fill="#ffffff" fillOpacity="0.9825294997065486">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.486734693877551s" values="1.5181581768620167;0.7590790884310084;1.9736056299206217;1.5181581768620167"></animate>
            </circle><circle cx="1548.1192304281628" cy="410.91957715974826" r="1.7810119553827737" fill="#ffffff" fillOpacity="0.6416399036397544">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4877551020408163s" values="1.7810119553827737;0.8905059776913868;2.315315541997606;1.7810119553827737"></animate>
            </circle><circle cx="36.995409027709734" cy="477.90471239854224" r="1.1424623128867486" fill="#ffffff" fillOpacity="0.5832226345361551">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4887755102040816s" values="1.1424623128867486;0.5712311564433743;1.4852010067527732;1.1424623128867486"></animate>
            </circle><circle cx="534.0265193378676" cy="648.4768450153066" r="1.3882911571948406" fill="#ffffff" fillOpacity="0.4344678677192093">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4897959183673469s" values="1.3882911571948406;0.6941455785974203;1.804778504353293;1.3882911571948406"></animate>
            </circle><circle cx="1691.1307888768367" cy="724.3566055234342" r="1.8730314468925418" fill="#ffffff" fillOpacity="0.36829365797374924">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49081632653061213s" values="1.8730314468925418;0.9365157234462709;2.4349408809603044;1.8730314468925418"></animate>
            </circle><circle cx="904.5980986684716" cy="1016.7086735678088" r="1.8754968575386561" fill="#ffffff" fillOpacity="0.11333545909784119">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49183673469387745s" values="1.8754968575386561;0.9377484287693281;2.438145914800253;1.8754968575386561"></animate>
            </circle><circle cx="259.89445854123227" cy="888.8667606258354" r="0.9741277631538444" fill="#ffffff" fillOpacity="0.22482549945421337">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49285714285714277s" values="0.9741277631538444;0.4870638815769222;1.2663660920999977;0.9741277631538444"></animate>
            </circle><circle cx="467.07175033914046" cy="865.8172899454731" r="1.0420658067267587" fill="#ffffff" fillOpacity="0.2449267820242967">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4938775510204081s" values="1.0420658067267587;0.5210329033633794;1.3546855487447864;1.0420658067267587"></animate>
            </circle><circle cx="67.35342113778444" cy="604.063253064673" r="1.0857396325693647" fill="#ffffff" fillOpacity="0.47320065139708756">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4948979591836734s" values="1.0857396325693647;0.5428698162846823;1.411461522340174;1.0857396325693647"></animate>
            </circle><circle cx="1358.4190664604757" cy="482.83272488591064" r="0.7486338398602994" fill="#ffffff" fillOpacity="0.5789249492274035">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4959183673469387s" values="0.7486338398602994;0.3743169199301497;0.9732239918183893;0.7486338398602994"></animate>
            </circle><circle cx="211.17009874454936" cy="780.1386235782743" r="0.9654585866214768" fill="#ffffff" fillOpacity="0.31964654920499336">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49693877551020404s" values="0.9654585866214768;0.4827292933107384;1.2550961626079198;0.9654585866214768"></animate>
            </circle><circle cx="1218.4752513803558" cy="813.7488333161675" r="1.8719000808201338" fill="#ffffff" fillOpacity="0.29033531978241206">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4979591836734693s" values="1.8719000808201338;0.9359500404100669;2.4334701050661742;1.8719000808201338"></animate>
            </circle><circle cx="1286.0885835345655" cy="196.9574005746866" r="1.8498220838146704" fill="#ffffff" fillOpacity="0.8282348250802151">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4989795918367346s" values="1.8498220838146704;0.9249110419073352;2.4047687089590717;1.8498220838146704"></animate>
            </circle><circle cx="1042.084988863525" cy="233.1245929082741" r="0.8700419855309781" fill="#ffffff" fillOpacity="0.7966936689753424">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49999999999999994s" values="0.8700419855309781;0.43502099276548906;1.1310545811902717;0.8700419855309781"></animate>
            </circle><circle cx="194.34402307014395" cy="744.9079739779595" r="0.9901994382868784" fill="#ffffff" fillOpacity="0.35037095292619813">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5010204081632652s" values="0.9901994382868784;0.4950997191434392;1.287259269772942;0.9901994382868784"></animate>
            </circle><circle cx="1446.4848809439347" cy="153.70749039438894" r="1.2208117855245069" fill="#ffffff" fillOpacity="0.8659527700048933">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5020408163265305s" values="1.2208117855245069;0.6104058927622534;1.587055321181859;1.2208117855245069"></animate>
            </circle><circle cx="271.14633968369793" cy="365.8022316997947" r="1.2316753410264345" fill="#ffffff" fillOpacity="0.6809864258432022">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5030612244897958s" values="1.2316753410264345;0.6158376705132173;1.601177943334365;1.2316753410264345"></animate>
            </circle><circle cx="715.7893585269887" cy="349.0837942454536" r="1.0357020731022528" fill="#ffffff" fillOpacity="0.6955664585068718">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5040816326530612s" values="1.0357020731022528;0.5178510365511264;1.3464126950329287;1.0357020731022528"></animate>
            </circle><circle cx="87.32056342131241" cy="1029.0577129690728" r="0.9884792758317167" fill="#ffffff" fillOpacity="0.1025659479920877">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5051020408163265s" values="0.9884792758317167;0.49423963791585834;1.2850230585812317;0.9884792758317167"></animate>
            </circle><circle cx="1292.5023173683026" cy="608.6702026991688" r="1.0707669816254666" fill="#ffffff" fillOpacity="0.46918296276235283">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5061224489795918s" values="1.0707669816254666;0.5353834908127333;1.3919970761131066;1.0707669816254666"></animate>
            </circle><circle cx="697.4188290556518" cy="825.1130143153716" r="0.8331992522297942" fill="#ffffff" fillOpacity="0.28042469681798987">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.507142857142857s" values="0.8331992522297942;0.4165996261148971;1.0831590278987324;0.8331992522297942"></animate>
            </circle><circle cx="834.4402453324669" cy="539.0391737438049" r="0.7242977261572743" fill="#ffffff" fillOpacity="0.5299076973164493">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5081632653061223s" values="0.7242977261572743;0.36214886307863714;0.9415870440044566;0.7242977261572743"></animate>
            </circle><circle cx="699.0988244910037" cy="127.89787867651158" r="1.7176086022355292" fill="#ffffff" fillOpacity="0.8884611523169956">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5091836734693876s" values="1.7176086022355292;0.8588043011177646;2.232891182906188;1.7176086022355292"></animate>
            </circle><circle cx="1450.9846248753909" cy="786.728529196363" r="1.5857647721529897" fill="#ffffff" fillOpacity="0.31389953849154395">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.510204081632653s" values="1.5857647721529897;0.7928823860764949;2.061494203798887;1.5857647721529897"></animate>
            </circle><circle cx="665.1741638445232" cy="223.64070260567865" r="0.835350167775353" fill="#ffffff" fillOpacity="0.8049645035415594">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5112244897959183s" values="0.835350167775353;0.4176750838876765;1.0859552181079588;0.835350167775353"></animate>
            </circle><circle cx="396.69999494223055" cy="860.5900359091079" r="1.44210776513005" fill="#ffffff" fillOpacity="0.2494854338001966">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5122448979591836s" values="1.44210776513005;0.721053882565025;1.874740094669065;1.44210776513005"></animate>
            </circle><circle cx="199.17640122722415" cy="912.4415192704215" r="1.3556736660930317" fill="#ffffff" fillOpacity="0.2042661169153301">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5132653061224489s" values="1.3556736660930317;0.6778368330465159;1.7623757659209414;1.3556736660930317"></animate>
            </circle><circle cx="670.4083960539136" cy="915.2560272767364" r="1.4662734214676856" fill="#ffffff" fillOpacity="0.20181160411912524">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5142857142857142s" values="1.4662734214676856;0.7331367107338428;1.9061554479079914;1.4662734214676856"></animate>
            </circle><circle cx="346.1532437851796" cy="954.8255111459843" r="0.9565715026983745" fill="#ffffff" fillOpacity="0.16730333330292074">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5153061224489796s" values="0.9565715026983745;0.47828575134918727;1.243542953507887;0.9565715026983745"></animate>
            </circle><circle cx="591.057629905695" cy="807.0671097376105" r="1.5432226250677716" fill="#ffffff" fillOpacity="0.2961624042985955">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5163265306122449s" values="1.5432226250677716;0.7716113125338858;2.0061894125881032;1.5432226250677716"></animate>
            </circle><circle cx="1044.9034670700264" cy="763.4682332176495" r="0.6911673273668644" fill="#ffffff" fillOpacity="0.33418468033344517">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5173469387755102s" values="0.6911673273668644;0.3455836636834322;0.8985175255769237;0.6911673273668644"></animate>
            </circle><circle cx="248.17339718255454" cy="708.9047521309327" r="1.7589183431188338" fill="#ffffff" fillOpacity="0.3817691115137215">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5183673469387755s" values="1.7589183431188338;0.8794591715594169;2.286593846054484;1.7589183431188338"></animate>
            </circle><circle cx="1548.0320239456905" cy="930.2094471761671" r="0.8735636008087446" fill="#ffffff" fillOpacity="0.18877083095101704">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5193877551020407s" values="0.8735636008087446;0.4367818004043723;1.135632681051368;0.8735636008087446"></animate>
            </circle><circle cx="981.6687932191215" cy="432.76035050653894" r="0.9480601969248967" fill="#ffffff" fillOpacity="0.6225927175815067">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.520408163265306s" values="0.9480601969248967;0.47403009846244837;1.2324782560023657;0.9480601969248967"></animate>
            </circle><circle cx="10.723129597188006" cy="86.64275888961875" r="0.9046904532263098" fill="#ffffff" fillOpacity="0.9244394544567278">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5214285714285714s" values="0.9046904532263098;0.4523452266131549;1.1760975891942027;0.9046904532263098"></animate>
            </circle><circle cx="388.9935135564734" cy="257.82778981355114" r="1.4814242440066558" fill="#ffffff" fillOpacity="0.7751501833021356">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5224489795918367s" values="1.4814242440066558;0.7407121220033279;1.9258515172086526;1.4814242440066558"></animate>
            </circle><circle cx="1093.239565237704" cy="718.7763169873706" r="1.0630929284082147" fill="#ffffff" fillOpacity="0.37316018867380474">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.523469387755102s" values="1.0630929284082147;0.5315464642041073;1.3820208069306792;1.0630929284082147"></animate>
            </circle><circle cx="22.517031173277147" cy="616.4905194904422" r="0.6345790510450581" fill="#ffffff" fillOpacity="0.4623629190490329">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5244897959183673s" values="0.6345790510450581;0.31728952552252904;0.8249527663585755;0.6345790510450581"></animate>
            </circle><circle cx="1260.9675223800473" cy="563.9828285452847" r="1.798525616296993" fill="#ffffff" fillOpacity="0.5081545099895772">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5255102040816326s" values="1.798525616296993;0.8992628081484965;2.338083301186091;1.798525616296993"></animate>
            </circle><circle cx="1505.6226367456977" cy="787.8723024408325" r="1.1978531295928823" fill="#ffffff" fillOpacity="0.31290206182485536">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5265306122448978s" values="1.1978531295928823;0.5989265647964411;1.557209068470747;1.1978531295928823"></animate>
            </circle><circle cx="1515.7002955514383" cy="729.1045008525383" r="1.3016265352709844" fill="#ffffff" fillOpacity="0.36415305158208866">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5275510204081632s" values="1.3016265352709844;0.6508132676354922;1.6921144958522798;1.3016265352709844"></animate>
            </circle><circle cx="337.57598092635084" cy="939.1609717499215" r="1.1559308674474058" fill="#ffffff" fillOpacity="0.1809642688227429">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5285714285714285s" values="1.1559308674474058;0.5779654337237029;1.5027101276816277;1.1559308674474058"></animate>
            </circle><circle cx="145.63460332146704" cy="342.0999562734843" r="1.6106178836239506" fill="#ffffff" fillOpacity="0.7016570148777753">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5295918367346938s" values="1.6106178836239506;0.8053089418119753;2.093803248711136;1.6106178836239506"></animate>
            </circle><circle cx="804.7874626723528" cy="592.0952725810284" r="1.625195100992579" fill="#ffffff" fillOpacity="0.4836378436793357">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5306122448979591s" values="1.625195100992579;0.8125975504962895;2.1127536312903525;1.625195100992579"></animate>
            </circle><circle cx="31.548747341572216" cy="289.77949921972703" r="1.4924807766774357" fill="#ffffff" fillOpacity="0.7472853204479125">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5316326530612244s" values="1.4924807766774357;0.7462403883387179;1.9402250096806666;1.4924807766774357"></animate>
            </circle><circle cx="962.7208010112768" cy="317.8325227499805" r="0.816921586713183" fill="#ffffff" fillOpacity="0.7228204743459472">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5326530612244897s" values="0.816921586713183;0.4084607933565915;1.061998062727138;0.816921586713183"></animate>
            </circle><circle cx="1286.9415081472139" cy="212.49892226323894" r="1.7911250155355263" fill="#ffffff" fillOpacity="0.8146811724448497">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.533673469387755s" values="1.7911250155355263;0.8955625077677631;2.3284625201961844;1.7911250155355263"></animate>
            </circle><circle cx="1432.2902802717097" cy="305.6295286670602" r="1.548975725581316" fill="#ffffff" fillOpacity="0.733462620348494">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5346938775510203s" values="1.548975725581316;0.774487862790658;2.013668443255711;1.548975725581316"></animate>
            </circle><circle cx="1507.618633502189" cy="595.9492225903385" r="0.9284545292971568" fill="#ffffff" fillOpacity="0.4802768407642397">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5357142857142856s" values="0.9284545292971568;0.4642272646485784;1.2069908880863038;0.9284545292971568"></animate>
            </circle><circle cx="409.3240433172732" cy="936.5492483810824" r="0.9588774053902092" fill="#ffffff" fillOpacity="0.18324193455138163">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5367346938775509s" values="0.9588774053902092;0.4794387026951046;1.2465406270072719;0.9588774053902092"></animate>
            </circle><circle cx="752.5817789935483" cy="294.50171007044327" r="1.1404598204788778" fill="#ffffff" fillOpacity="0.74316711331066">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5377551020408162s" values="1.1404598204788778;0.5702299102394389;1.4825977666225412;1.1404598204788778"></animate>
            </circle><circle cx="259.9842355771306" cy="990.3899313110797" r="0.8211538856117615" fill="#ffffff" fillOpacity="0.13628785060080256">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5387755102040815s" values="0.8211538856117615;0.41057694280588075;1.06750005129529;0.8211538856117615"></animate>
            </circle><circle cx="715.1575099248325" cy="41.47510964324393" r="1.5711205184556378" fill="#ffffff" fillOpacity="0.963829846241357">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5397959183673469s" values="1.5711205184556378;0.7855602592278189;2.042456673992329;1.5711205184556378"></animate>
            </circle><circle cx="697.4797046572962" cy="434.683567503423" r="1.713583919567371" fill="#ffffff" fillOpacity="0.6209154934563171">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5408163265306122s" values="1.713583919567371;0.8567919597836855;2.2276590954375823;1.713583919567371"></animate>
            </circle><circle cx="216.16819844089352" cy="680.2343677216331" r="1.1212266210897515" fill="#ffffff" fillOpacity="0.40677235373113396">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5418367346938775s" values="1.1212266210897515;0.5606133105448757;1.457594607416677;1.1212266210897515"></animate>
            </circle><circle cx="125.3734653010923" cy="614.7364575257818" r="1.3891837574429222" fill="#ffffff" fillOpacity="0.4638926242507717">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5428571428571428s" values="1.3891837574429222;0.6945918787214611;1.8059388846757989;1.3891837574429222"></animate>
            </circle><circle cx="1535.522661212451" cy="467.23971506746005" r="1.174367329543526" fill="#ffffff" fillOpacity="0.5925235043016336">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5438775510204081s" values="1.174367329543526;0.587183664771763;1.5266775284065839;1.174367329543526"></animate>
            </circle><circle cx="1258.2881608091554" cy="617.9188839605428" r="1.2371808026704263" fill="#ffffff" fillOpacity="0.4611172523599918">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5448979591836735s" values="1.2371808026704263;0.6185904013352131;1.6083350434715542;1.2371808026704263"></animate>
            </circle><circle cx="324.06112323598666" cy="567.8291255645315" r="1.0528962720788098" fill="#ffffff" fillOpacity="0.5048001811937225">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5459183673469388s" values="1.0528962720788098;0.5264481360394049;1.3687651537024528;1.0528962720788098"></animate>
            </circle><circle cx="818.5170648007406" cy="478.4222407069548" r="1.030652658644001" fill="#ffffff" fillOpacity="0.582771301709051">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5469387755102041s" values="1.030652658644001;0.5153263293220005;1.3398484562372013;1.030652658644001"></animate>
            </circle><circle cx="1356.605658278152" cy="920.8919244501783" r="1.6085117842546761" fill="#ffffff" fillOpacity="0.1968965775143794">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5479591836734693s" values="1.6085117842546761;0.8042558921273381;2.091065319531079;1.6085117842546761"></animate>
            </circle><circle cx="484.8831235187593" cy="713.6081636836541" r="1.2148255606281244" fill="#ffffff" fillOpacity="0.3776672991130924">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5489795918367346s" values="1.2148255606281244;0.6074127803140622;1.5792732288165618;1.2148255606281244"></animate>
            </circle><circle cx="731.042508233465" cy="111.98812356433575" r="1.8892208266551798" fill="#ffffff" fillOpacity="0.9023359387520328">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5499999999999999s" values="1.8892208266551798;0.9446104133275899;2.4559870746517336;1.8892208266551798"></animate>
            </circle><circle cx="157.81866906623492" cy="149.0747840199366" r="0.8154379029686915" fill="#ffffff" fillOpacity="0.869992920912846">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5510204081632653s" values="0.8154379029686915;0.4077189514843457;1.060069273859299;0.8154379029686915"></animate>
            </circle><circle cx="113.95846869401005" cy="843.2554787914895" r="1.552331328947655" fill="#ffffff" fillOpacity="0.26460278012370103">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5520408163265306s" values="1.552331328947655;0.7761656644738275;2.0180307276319516;1.552331328947655"></animate>
            </circle><circle cx="1439.0303047071823" cy="789.8664852060036" r="1.8069305906678215" fill="#ffffff" fillOpacity="0.3111629489482527">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5530612244897959s" values="1.8069305906678215;0.9034652953339107;2.349009767868168;1.8069305906678215"></animate>
            </circle><circle cx="1391.3381749548403" cy="134.21597301317505" r="1.7288382146343224" fill="#ffffff" fillOpacity="0.8829511863257195">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5540816326530612s" values="1.7288382146343224;0.8644191073171612;2.247489679024619;1.7288382146343224"></animate>
            </circle><circle cx="1657.5417832865082" cy="648.8783997527825" r="0.7385328833853673" fill="#ffffff" fillOpacity="0.43411767463420137">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5551020408163264s" values="0.7385328833853673;0.36926644169268363;0.9600927484009775;0.7385328833853673"></animate>
            </circle><circle cx="743.7485390285437" cy="672.4205535202472" r="1.2482968357908044" fill="#ffffff" fillOpacity="0.4135867265811798">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5561224489795917s" values="1.2482968357908044;0.6241484178954022;1.6227858865280458;1.2482968357908044"></animate>
            </circle><circle cx="68.98809424771827" cy="969.6197682010564" r="1.027679278611549" fill="#ffffff" fillOpacity="0.15440136494093915">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.557142857142857s" values="1.027679278611549;0.5138396393057745;1.3359830621950137;1.027679278611549"></animate>
            </circle><circle cx="656.3430398428513" cy="95.39637863941842" r="1.8232967470695" fill="#ffffff" fillOpacity="0.9168054837446933">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5581632653061224s" values="1.8232967470695;0.91164837353475;2.37028577119035;1.8232967470695"></animate>
            </circle><circle cx="74.61664714757387" cy="463.7851207113278" r="1.082561509900139" fill="#ffffff" fillOpacity="0.5955362319377955">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5591836734693877s" values="1.082561509900139;0.5412807549500696;1.407329962870181;1.082561509900139"></animate>
            </circle><circle cx="604.4619457357871" cy="60.16734265497228" r="1.1776338776476802" fill="#ffffff" fillOpacity="0.9475284802427567">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.560204081632653s" values="1.1776338776476802;0.5888169388238401;1.5309240409419844;1.1776338776476802"></animate>
            </circle><circle cx="504.37594908512926" cy="807.0215978818252" r="1.6687657625021093" fill="#ffffff" fillOpacity="0.2962020948705013">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5612244897959183s" values="1.6687657625021093;0.8343828812510546;2.1693954912527422;1.6687657625021093"></animate>
            </circle><circle cx="1128.8259355384937" cy="41.511552056552915" r="0.9444024248964021" fill="#ffffff" fillOpacity="0.9637980650669596">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5622448979591835s" values="0.9444024248964021;0.47220121244820107;1.227723152365323;0.9444024248964021"></animate>
            </circle><circle cx="941.3863016513792" cy="811.2165390001987" r="1.7355992477802937" fill="#ffffff" fillOpacity="0.29254371598819884">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5632653061224488s" values="1.7355992477802937;0.8677996238901469;2.256279022114382;1.7355992477802937"></animate>
            </circle><circle cx="488.382315661951" cy="308.44954347913233" r="0.7776311791567101" fill="#ffffff" fillOpacity="0.7310033051054078">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5642857142857142s" values="0.7776311791567101;0.38881558957835505;1.0109205329037232;0.7776311791567101"></animate>
            </circle><circle cx="45.82788037151314" cy="493.6038989561348" r="1.314293227188649" fill="#ffffff" fillOpacity="0.5695314834684871">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5653061224489795s" values="1.314293227188649;0.6571466135943245;1.7085811953452437;1.314293227188649"></animate>
            </circle><circle cx="628.1472456365595" cy="695.0783267891021" r="1.7565181848446656" fill="#ffffff" fillOpacity="0.39382704059089935">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5663265306122448s" values="1.7565181848446656;0.8782590924223328;2.2834736402980655;1.7565181848446656"></animate>
            </circle><circle cx="333.82553399645013" cy="243.70041843675875" r="1.3517318987221716" fill="#ffffff" fillOpacity="0.7874705653167801">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5673469387755101s" values="1.3517318987221716;0.6758659493610858;1.7572514683388232;1.3517318987221716"></animate>
            </circle><circle cx="497.0107824081452" cy="25.207720940151724" r="1.0315254635361255" fill="#ffffff" fillOpacity="0.9780165224359142">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5683673469387754s" values="1.0315254635361255;0.5157627317680628;1.3409831025969632;1.0315254635361255"></animate>
            </circle><circle cx="119.80922773358351" cy="525.881626158257" r="1.5081329351263084" fill="#ffffff" fillOpacity="0.5413823027689619">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5693877551020408s" values="1.5081329351263084;0.7540664675631542;1.960572815664201;1.5081329351263084"></animate>
            </circle><circle cx="1584.838947706736" cy="897.4484861005224" r="0.8876442718902071" fill="#ffffff" fillOpacity="0.21734143654024213">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5704081632653061s" values="0.8876442718902071;0.44382213594510356;1.1539375534572693;0.8876442718902071"></animate>
            </circle><circle cx="1756.5329348262128" cy="960.6944540523327" r="1.6502173393955264" fill="#ffffff" fillOpacity="0.1621850691404075">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5714285714285714s" values="1.6502173393955264;0.8251086696977632;2.1452825412141845;1.6502173393955264"></animate>
            </circle><circle cx="71.28619885929048" cy="229.95520405019695" r="0.6452975246625763" fill="#ffffff" fillOpacity="0.7994576708864561">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5724489795918367s" values="0.6452975246625763;0.32264876233128814;0.8388867820613491;0.6452975246625763"></animate>
            </circle><circle cx="1178.410954483864" cy="953.2474577776243" r="1.725829093040951" fill="#ffffff" fillOpacity="0.16867954263579277">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.573469387755102s" values="1.725829093040951;0.8629145465204755;2.243577820953236;1.725829093040951"></animate>
            </circle><circle cx="1628.292990489541" cy="220.50302924571085" r="1.1255385063965735" fill="#ffffff" fillOpacity="0.8077008465880429">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5744897959183674s" values="1.1255385063965735;0.5627692531982867;1.4632000583155456;1.1255385063965735"></animate>
            </circle><circle cx="886.6206753299903" cy="422.56359560026203" r="1.818243799754683" fill="#ffffff" fillOpacity="0.6314852363951203">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5755102040816326s" values="1.818243799754683;0.9091218998773415;2.3637169396810878;1.818243799754683"></animate>
            </circle><circle cx="1752.5315368501845" cy="456.43676744609013" r="1.810236331585269" fill="#ffffff" fillOpacity="0.6019446795528283">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5765306122448979s" values="1.810236331585269;0.9051181657926345;2.3533072310608496;1.810236331585269"></animate>
            </circle><circle cx="1428.938855889883" cy="690.2591153371422" r="0.887483894487898" fill="#ffffff" fillOpacity="0.39802984127574803">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5775510204081632s" values="0.887483894487898;0.443741947243949;1.1537290628342673;0.887483894487898"></animate>
            </circle><circle cx="1036.6215212614554" cy="866.3571154365025" r="1.7677135541535156" fill="#ffffff" fillOpacity="0.2444560039797944">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5785714285714285s" values="1.7677135541535156;0.8838567770767578;2.29802762039957;1.7677135541535156"></animate>
            </circle><circle cx="40.40073856853233" cy="107.71180269215766" r="1.643435334835556" fill="#ffffff" fillOpacity="0.9060652883498626">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5795918367346938s" values="1.643435334835556;0.821717667417778;2.136465935286223;1.643435334835556"></animate>
            </circle><circle cx="168.3443050475983" cy="154.1286275534689" r="0.7436190852060246" fill="#ffffff" fillOpacity="0.8655854992266259">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5806122448979592s" values="0.7436190852060246;0.3718095426030123;0.966704810767832;0.7436190852060246"></animate>
            </circle><circle cx="322.19494274958595" cy="149.78590066913355" r="1.1822666513152753" fill="#ffffff" fillOpacity="0.8693727610443602">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5816326530612245s" values="1.1822666513152753;0.5911333256576377;1.536946646709858;1.1822666513152753"></animate>
            </circle><circle cx="1248.3134965276276" cy="52.31309458410194" r="1.7924796938575753" fill="#ffffff" fillOpacity="0.9543781151882832">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5826530612244897s" values="1.7924796938575753;0.8962398469287877;2.330223602014848;1.7924796938575753"></animate>
            </circle><circle cx="317.5549676903896" cy="590.1726766116086" r="0.9467166758317196" fill="#ffffff" fillOpacity="0.4853145262108065">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.583673469387755s" values="0.9467166758317196;0.4733583379158598;1.2307316785812354;0.9467166758317196"></animate>
            </circle><circle cx="1126.3283137312665" cy="1006.6500589544835" r="1.198935008825933" fill="#ffffff" fillOpacity="0.12210750672574115">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5846938775510203s" values="1.198935008825933;0.5994675044129665;1.5586155114737128;1.198935008825933"></animate>
            </circle><circle cx="739.388097708119" cy="261.5077025714947" r="1.8634637847587254" fill="#ffffff" fillOpacity="0.771940957059743">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5857142857142856s" values="1.8634637847587254;0.9317318923793627;2.4225029201863433;1.8634637847587254"></animate>
            </circle><circle cx="289.512771653718" cy="695.7492995433298" r="1.75517510922917" fill="#ffffff" fillOpacity="0.3932418899331426">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.586734693877551s" values="1.75517510922917;0.877587554614585;2.281727641997921;1.75517510922917"></animate>
            </circle><circle cx="614.6581220299565" cy="439.88343740367657" r="1.1747206982463358" fill="#ffffff" fillOpacity="0.616380723194468">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5877551020408163s" values="1.1747206982463358;0.5873603491231679;1.5271369077202366;1.1747206982463358"></animate>
            </circle><circle cx="1145.9586543043833" cy="788.1432121255687" r="1.539642478539003" fill="#ffffff" fillOpacity="0.3126658033788645">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5887755102040816s" values="1.539642478539003;0.7698212392695015;2.001535222100704;1.539642478539003"></animate>
            </circle><circle cx="896.6636030144153" cy="356.44581013327286" r="1.3485295073946741" fill="#ffffff" fillOpacity="0.6891460958140062">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5897959183673468s" values="1.3485295073946741;0.6742647536973371;1.7530883596130764;1.3485295073946741"></animate>
            </circle><circle cx="99.96733771636976" cy="585.4400350672162" r="1.784200334171096" fill="#ffffff" fillOpacity="0.4894418298832417">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5908163265306121s" values="1.784200334171096;0.892100167085548;2.3194604344224246;1.784200334171096"></animate>
            </circle><circle cx="1344.7680265827423" cy="466.89465022170987" r="1.5775245398414872" fill="#ffffff" fillOpacity="0.5928244329461833">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5918367346938774s" values="1.5775245398414872;0.7887622699207436;2.0507819017939335;1.5775245398414872"></animate>
            </circle><circle cx="551.558013371521" cy="426.4283234809578" r="1.3488123972871027" fill="#ffffff" fillOpacity="0.6281148341735834">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5928571428571427s" values="1.3488123972871027;0.6744061986435513;1.7534561164732336;1.3488123972871027"></animate>
            </circle><circle cx="1413.0555025492838" cy="631.1938498455548" r="1.717221813069678" fill="#ffffff" fillOpacity="0.4495402472277138">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5938775510204081s" values="1.717221813069678;0.858610906534839;2.2323883569905814;1.717221813069678"></animate>
            </circle><circle cx="1408.3602723025442" cy="370.1953289575628" r="1.3222546453634243" fill="#ffffff" fillOpacity="0.6771552363742184">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5948979591836734s" values="1.3222546453634243;0.6611273226817121;1.7189310389724517;1.3222546453634243"></animate>
            </circle><circle cx="1533.9615127971988" cy="823.1643985700592" r="1.7414375634162216" fill="#ffffff" fillOpacity="0.2821240710144832">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5959183673469387s" values="1.7414375634162216;0.8707187817081108;2.263868832441088;1.7414375634162216"></animate>
            </circle><circle cx="507.97127336877486" cy="150.11049182933016" r="1.5960606109872042" fill="#ffffff" fillOpacity="0.8690896873581423">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5969387755102039s" values="1.5960606109872042;0.7980303054936021;2.0748787942833657;1.5960606109872042"></animate>
            </circle><circle cx="1130.9990311960007" cy="489.22113505307345" r="0.9975064975501667" fill="#ffffff" fillOpacity="0.5733536612909244">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5979591836734692s" values="0.9975064975501667;0.49875324877508337;1.296758446815217;0.9975064975501667"></animate>
            </circle><circle cx="1437.9426907946674" cy="36.21525698563154" r="0.9619227911569755" fill="#ffffff" fillOpacity="0.9684169270474143">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5989795918367345s" values="0.9619227911569755;0.48096139557848777;1.2504996285040682;0.9619227911569755"></animate>
            </circle><circle cx="1386.0238569049627" cy="898.5305789527786" r="1.676385512853625" fill="#ffffff" fillOpacity="0.2163977509132745">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5999999999999999s" values="1.676385512853625;0.8381927564268125;2.1793011667097124;1.676385512853625"></animate>
            </circle><circle cx="1703.8913707719646" cy="270.9574247489033" r="1.2978387466141112" fill="#ffffff" fillOpacity="0.7636999202771191">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6010204081632652s" values="1.2978387466141112;0.6489193733070556;1.6871903705983446;1.2978387466141112"></animate>
            </circle><circle cx="1214.6349714557412" cy="862.0550196484503" r="0.829337635495409" fill="#ffffff" fillOpacity="0.2482078317019329">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6020408163265305s" values="0.829337635495409;0.4146688177477045;1.0781389261440317;0.829337635495409"></animate>
            </circle><circle cx="1751.0265909335264" cy="558.9075430028315" r="0.9093068381957988" fill="#ffffff" fillOpacity="0.5125806311021819">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6030612244897958s" values="0.9093068381957988;0.4546534190978994;1.1820988896545386;0.9093068381957988"></animate>
            </circle><circle cx="810.5319899266769" cy="331.725337656943" r="1.8437086927517579" fill="#ffffff" fillOpacity="0.7107046473922009">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6040816326530611s" values="1.8437086927517579;0.9218543463758789;2.3968213005772854;1.8437086927517579"></animate>
            </circle><circle cx="874.0453996855754" cy="525.5540485321886" r="1.1186052344746102" fill="#ffffff" fillOpacity="0.5416679809312309">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6051020408163265s" values="1.1186052344746102;0.5593026172373051;1.4541868048169935;1.1186052344746102"></animate>
            </circle><circle cx="602.4734278035281" cy="168.87627087917758" r="0.7367732681432292" fill="#ffffff" fillOpacity="0.8527241823728102">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6061224489795918s" values="0.7367732681432292;0.3683866340716146;0.957805248586198;0.7367732681432292"></animate>
            </circle><circle cx="541.7244133944398" cy="863.5798608610938" r="1.6795960476915883" fill="#ffffff" fillOpacity="0.24687802831881353">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6071428571428571s" values="1.6795960476915883;0.8397980238457942;2.183474861999065;1.6795960476915883"></animate>
            </circle><circle cx="1542.0498039769536" cy="943.2406371559719" r="1.5532154603983384" fill="#ffffff" fillOpacity="0.17740642108490828">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6081632653061224s" values="1.5532154603983384;0.7766077301991692;2.01918009851784;1.5532154603983384"></animate>
            </circle><circle cx="474.7214127594918" cy="2.8771610950601545" r="1.164132209184699" fill="#ffffff" fillOpacity="0.9974908478822151">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6091836734693877s" values="1.164132209184699;0.5820661045923495;1.5133718719401088;1.164132209184699"></animate>
            </circle><circle cx="1695.6590393550239" cy="829.6462519688134" r="1.4900689050556994" fill="#ffffff" fillOpacity="0.27647129188766273">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.610204081632653s" values="1.4900689050556994;0.7450344525278497;1.9370895765724094;1.4900689050556994"></animate>
            </circle><circle cx="655.5315510812676" cy="718.2971088017127" r="0.6453746907022847" fill="#ffffff" fillOpacity="0.373578102789204">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6112244897959183s" values="0.6453746907022847;0.32268734535114235;0.8389870979129701;0.6453746907022847"></animate>
            </circle><circle cx="1175.4290617760755" cy="99.3768933492213" r="1.6376195483925542" fill="#ffffff" fillOpacity="0.913334104637307">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6122448979591836s" values="1.6376195483925542;0.8188097741962771;2.1289054129103206;1.6376195483925542"></animate>
            </circle><circle cx="367.7675759201726" cy="410.5777451221929" r="0.9329351016660015" fill="#ffffff" fillOpacity="0.6419380129748318">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6132653061224489s" values="0.9329351016660015;0.46646755083300073;1.212815632165802;0.9329351016660015"></animate>
            </circle><circle cx="934.8056909791071" cy="417.3754671663912" r="1.7126985303223319" fill="#ffffff" fillOpacity="0.6360097670060542">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6142857142857142s" values="1.7126985303223319;0.8563492651611659;2.2265080894190317;1.7126985303223319"></animate>
            </circle><circle cx="1491.8427719202093" cy="698.0030000163007" r="1.0471280246212287" fill="#ffffff" fillOpacity="0.3912764534741564">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6153061224489795s" values="1.0471280246212287;0.5235640123106143;1.3612664320075973;1.0471280246212287"></animate>
            </circle><circle cx="323.50094262606314" cy="537.5727476656706" r="1.4060729855906466" fill="#ffffff" fillOpacity="0.5311865572683105">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6163265306122448s" values="1.4060729855906466;0.7030364927953233;1.8278948812678406;1.4060729855906466"></animate>
            </circle><circle cx="106.8214227567394" cy="46.86975227141115" r="1.4780356465366922" fill="#ffffff" fillOpacity="0.959125216042374">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6173469387755102s" values="1.4780356465366922;0.7390178232683461;1.9214463404976998;1.4780356465366922"></animate>
            </circle><circle cx="451.88813967240867" cy="624.864721247961" r="1.2814940556390075" fill="#ffffff" fillOpacity="0.45505983612096423">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6183673469387754s" values="1.2814940556390075;0.6407470278195038;1.6659422723307098;1.2814940556390075"></animate>
            </circle><circle cx="508.7322372977517" cy="478.152375557912" r="1.8466975910570727" fill="#ffffff" fillOpacity="0.5830066492227511">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6193877551020407s" values="1.8466975910570727;0.9233487955285363;2.4007068683741943;1.8466975910570727"></animate>
            </circle><circle cx="1169.4612861259086" cy="829.2652739241976" r="1.2922460136525433" fill="#ffffff" fillOpacity="0.27680354018238584">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.620408163265306s" values="1.2922460136525433;0.6461230068262717;1.6799198177483063;1.2922460136525433"></animate>
            </circle><circle cx="976.2969488990108" cy="623.1647888386859" r="1.6972014981876422" fill="#ffffff" fillOpacity="0.45654233531509947">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6214285714285713s" values="1.6972014981876422;0.8486007490938211;2.206361947643935;1.6972014981876422"></animate>
            </circle><circle cx="905.152613300581" cy="921.4367129473092" r="1.214574054310094" fill="#ffffff" fillOpacity="0.19642147126688156">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6224489795918366s" values="1.214574054310094;0.607287027155047;1.5789462706031223;1.214574054310094"></animate>
            </circle><circle cx="521.8470450178487" cy="505.91821521134966" r="1.2413998684065424" fill="#ffffff" fillOpacity="0.5587922541761486">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.623469387755102s" values="1.2413998684065424;0.6206999342032712;1.613819828928505;1.2413998684065424"></animate>
            </circle><circle cx="258.1276623015897" cy="436.39357353806963" r="1.5985524084822216" fill="#ffffff" fillOpacity="0.6194242091237765">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6244897959183673s" values="1.5985524084822216;0.7992762042411108;2.078118131026888;1.5985524084822216"></animate>
            </circle><circle cx="836.962814126789" cy="12.308395368027632" r="1.6022529221993564" fill="#ffffff" fillOpacity="0.9892659342720689">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6255102040816325s" values="1.6022529221993564;0.8011264610996782;2.0829287988591636;1.6022529221993564"></animate>
            </circle><circle cx="1564.863578684023" cy="384.79116265814054" r="1.4127531333816108" fill="#ffffff" fillOpacity="0.6644263116353425">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6265306122448978s" values="1.4127531333816108;0.7063765666908054;1.836579073396094;1.4127531333816108"></animate>
            </circle><circle cx="1667.1439008562909" cy="567.3652065066035" r="1.001884427349636" fill="#ffffff" fillOpacity="0.505204761767497">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6275510204081631s" values="1.001884427349636;0.500942213674818;1.3024497555545267;1.001884427349636"></animate>
            </circle><circle cx="69.22811154299882" cy="144.67404139228188" r="1.8229389812023706" fill="#ffffff" fillOpacity="0.8738307778555682">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6285714285714284s" values="1.8229389812023706;0.9114694906011853;2.3698206755630817;1.8229389812023706"></animate>
            </circle><circle cx="609.758146077117" cy="330.07889033463834" r="1.7875532453998606" fill="#ffffff" fillOpacity="0.712140502615141">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6295918367346938s" values="1.7875532453998606;0.8937766226999303;2.323819219019819;1.7875532453998606"></animate>
            </circle><circle cx="475.84638593233217" cy="976.9918370166848" r="1.438249301346943" fill="#ffffff" fillOpacity="0.1479722351598679">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6306122448979591s" values="1.438249301346943;0.7191246506734715;1.869724091751026;1.438249301346943"></animate>
            </circle><circle cx="1242.5173329740264" cy="676.7807516431386" r="0.9268109597842434" fill="#ffffff" fillOpacity="0.40978422821819305">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6316326530612244s" values="0.9268109597842434;0.4634054798921217;1.2048542477195165;0.9268109597842434"></animate>
            </circle><circle cx="254.62356933710362" cy="738.0829847757998" r="1.5844663373443268" fill="#ffffff" fillOpacity="0.3563229783931978">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6326530612244897s" values="1.5844663373443268;0.7922331686721634;2.059806238547625;1.5844663373443268"></animate>
            </circle><circle cx="1186.6501881332977" cy="43.89759177800347" r="1.5074553584648298" fill="#ffffff" fillOpacity="0.9617172164726714">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.633673469387755s" values="1.5074553584648298;0.7537276792324149;1.9596919660042789;1.5074553584648298"></animate>
            </circle><circle cx="747.0706388837165" cy="762.7609456228073" r="0.838385107432347" fill="#ffffff" fillOpacity="0.33480150091034244">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6346938775510204s" values="0.838385107432347;0.4191925537161735;1.089900639662051;0.838385107432347"></animate>
            </circle><circle cx="167.01238921411596" cy="1009.1789006501031" r="1.0729204946421866" fill="#ffffff" fillOpacity="0.11990212152607292">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6357142857142857s" values="1.0729204946421866;0.5364602473210933;1.3947966430348426;1.0729204946421866"></animate>
            </circle><circle cx="228.76002551763278" cy="972.7399039485068" r="1.542145254435782" fill="#ffffff" fillOpacity="0.1516803163239766">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.636734693877551s" values="1.542145254435782;0.771072627217891;2.004788830766517;1.542145254435782"></animate>
            </circle><circle cx="748.7120359153826" cy="99.36066754899649" r="1.5273603052092986" fill="#ffffff" fillOpacity="0.9133482550444798">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6377551020408163s" values="1.5273603052092986;0.7636801526046493;1.9855683967720883;1.5273603052092986"></animate>
            </circle><circle cx="1346.2036837195742" cy="996.1749856590418" r="1.3855746046334416" fill="#ffffff" fillOpacity="0.13124274506478914">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6387755102040816s" values="1.3855746046334416;0.6927873023167208;1.801246986023474;1.3855746046334416"></animate>
            </circle><circle cx="1054.7533541552993" cy="316.8223577069931" r="0.8927292436803647" fill="#ffffff" fillOpacity="0.7237014322322735">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6397959183673468s" values="0.8927292436803647;0.44636462184018233;1.1605480167844742;0.8927292436803647"></animate>
            </circle><circle cx="572.0918035711596" cy="468.8326121560768" r="0.9473373802928868" fill="#ffffff" fillOpacity="0.5911343498638866">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6408163265306122s" values="0.9473373802928868;0.4736686901464434;1.2315385943807529;0.9473373802928868"></animate>
            </circle><circle cx="1244.1334063072243" cy="977.3452439566565" r="0.9774734402415924" fill="#ffffff" fillOpacity="0.14766403143314838">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6418367346938775s" values="0.9774734402415924;0.4887367201207962;1.2707154723140701;0.9774734402415924"></animate>
            </circle><circle cx="1591.894485153735" cy="572.432477601801" r="1.3210303035315127" fill="#ffffff" fillOpacity="0.5007856299984293">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6428571428571428s" values="1.3210303035315127;0.6605151517657564;1.7173393945909665;1.3210303035315127"></animate>
            </circle><circle cx="557.9784482419794" cy="465.3620574994226" r="1.8175944279237468" fill="#ffffff" fillOpacity="0.5941609963667827">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6438775510204081s" values="1.8175944279237468;0.9087972139618734;2.362872756300871;1.8175944279237468"></animate>
            </circle><circle cx="214.44482321881836" cy="381.8074885318974" r="1.827286002622591" fill="#ffffff" fillOpacity="0.667028353024508">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6448979591836734s" values="1.827286002622591;0.9136430013112955;2.3754718034093685;1.827286002622591"></animate>
            </circle><circle cx="360.16699980952046" cy="742.0448266005715" r="0.6357998007241731" fill="#ffffff" fillOpacity="0.35286788377857137">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6459183673469387s" values="0.6357998007241731;0.31789990036208654;0.826539740941425;0.6357998007241731"></animate>
            </circle><circle cx="1080.651215496608" cy="377.9575840368575" r="0.8252307055315052" fill="#ffffff" fillOpacity="0.6703858278748336">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.646938775510204s" values="0.8252307055315052;0.4126153527657526;1.0727999171909568;0.8252307055315052"></animate>
            </circle><circle cx="607.9587452295358" cy="104.00182096101746" r="0.6524041247997023" fill="#ffffff" fillOpacity="0.9093007375339964">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6479591836734693s" values="0.6524041247997023;0.32620206239985117;0.8481253622396131;0.6524041247997023"></animate>
            </circle><circle cx="687.7950899476112" cy="644.8136183965338" r="1.1889028097849332" fill="#ffffff" fillOpacity="0.43766254209604616">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6489795918367346s" values="1.1889028097849332;0.5944514048924666;1.5455736527204134;1.1889028097849332"></animate>
            </circle><circle cx="1519.9973337131748" cy="903.4810605664792" r="1.466732807561942" fill="#ffffff" fillOpacity="0.21208047043621003">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6499999999999999s" values="1.466732807561942;0.733366403780971;1.9067526498305245;1.466732807561942"></animate>
            </circle><circle cx="1084.8763518078288" cy="235.2649277064912" r="0.813794286688727" fill="#ffffff" fillOpacity="0.7948270979303855">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6510204081632652s" values="0.813794286688727;0.4068971433443635;1.0579325726953452;0.813794286688727"></animate>
            </circle><circle cx="372.24536456154084" cy="890.4607568684849" r="0.6518660443945624" fill="#ffffff" fillOpacity="0.22343538645190275">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6520408163265305s" values="0.6518660443945624;0.3259330221972812;0.8474258577129312;0.6518660443945624"></animate>
            </circle><circle cx="874.5598068995739" cy="792.3274675894196" r="1.6985918719139068" fill="#ffffff" fillOpacity="0.3090167433813201">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6530612244897959s" values="1.6985918719139068;0.8492959359569534;2.208169433488079;1.6985918719139068"></animate>
            </circle><circle cx="857.5193247908334" cy="563.0617410662488" r="1.5208163063882112" fill="#ffffff" fillOpacity="0.5089577839538528">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6540816326530611s" values="1.5208163063882112;0.7604081531941056;1.9770611983046746;1.5208163063882112"></animate>
            </circle><circle cx="1542.728740518648" cy="331.76383251302246" r="1.7812579788697804" fill="#ffffff" fillOpacity="0.7106710762967828">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6551020408163264s" values="1.7812579788697804;0.8906289894348902;2.3156353725307146;1.7812579788697804"></animate>
            </circle><circle cx="771.5563154061012" cy="675.3141244972428" r="1.8027693826391322" fill="#ffffff" fillOpacity="0.41106326351984634">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6561224489795917s" values="1.8027693826391322;0.9013846913195661;2.343600197430872;1.8027693826391322"></animate>
            </circle><circle cx="22.496761364785414" cy="94.52596969673559" r="1.3228882780991278" fill="#ffffff" fillOpacity="0.9175645613109864">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.657142857142857s" values="1.3228882780991278;0.6614441390495639;1.7197547615288662;1.3228882780991278"></animate>
            </circle><circle cx="1272.9630944687622" cy="551.8074524582618" r="1.5427490917431617" fill="#ffffff" fillOpacity="0.5187725705305857">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6581632653061223s" values="1.5427490917431617;0.7713745458715808;2.00557381926611;1.5427490917431617"></animate>
            </circle><circle cx="497.3629614296887" cy="553.6326033505707" r="1.1601355147656955" fill="#ffffff" fillOpacity="0.517180869171014">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6591836734693877s" values="1.1601355147656955;0.5800677573828478;1.5081761691954043;1.1601355147656955"></animate>
            </circle><circle cx="288.48077251978884" cy="384.6388146363166" r="0.7994104526212282" fill="#ffffff" fillOpacity="0.6645591732822821">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.660204081632653s" values="0.7994104526212282;0.3997052263106141;1.0392335884075967;0.7994104526212282"></animate>
            </circle><circle cx="310.4765595295497" cy="637.7020409513962" r="1.036269911556941" fill="#ffffff" fillOpacity="0.443864499170294">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6612244897959183s" values="1.036269911556941;0.5181349557784705;1.3471508850240232;1.036269911556941"></animate>
            </circle><circle cx="225.7747489718938" cy="409.7247563285143" r="1.3728764058947496" fill="#ffffff" fillOpacity="0.6426818985507142">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6622448979591836s" values="1.3728764058947496;0.6864382029473748;1.7847393276631744;1.3728764058947496"></animate>
            </circle><circle cx="797.6994288134699" cy="245.48020161879188" r="0.6544159572709685" fill="#ffffff" fillOpacity="0.785918428820821">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6632653061224489s" values="0.6544159572709685;0.32720797863548423;0.850740744452259;0.6544159572709685"></animate>
            </circle><circle cx="27.407313824295194" cy="533.2300645521685" r="0.8579977579426964" fill="#ffffff" fillOpacity="0.5349737809138065">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6642857142857143s" values="0.8579977579426964;0.4289988789713482;1.1153970853255053;0.8579977579426964"></animate>
            </circle><circle cx="414.09844309310205" cy="729.7658218119578" r="1.4530077322287143" fill="#ffffff" fillOpacity="0.3635763181872461">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6653061224489796s" values="1.4530077322287143;0.7265038661143571;1.8889100518973285;1.4530077322287143"></animate>
            </circle><circle cx="930.7338793934119" cy="635.0789448503796" r="1.621968972730992" fill="#ffffff" fillOpacity="0.4461520829793202">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6663265306122449s" values="1.621968972730992;0.810984486365496;2.1085596645502895;1.621968972730992"></animate>
            </circle><circle cx="172.02108973806025" cy="647.9388509200517" r="1.5180355534595025" fill="#ffffff" fillOpacity="0.43493704861623406">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6673469387755101s" values="1.5180355534595025;0.7590177767297512;1.9734462194973532;1.5180355534595025"></animate>
            </circle><circle cx="1110.447473599534" cy="929.80469226279" r="1.1005686952679403" fill="#ffffff" fillOpacity="0.18912381488710173">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6683673469387754s" values="1.1005686952679403;0.5502843476339702;1.4307393038483225;1.1005686952679403"></animate>
            </circle><circle cx="354.06051522778625" cy="239.11782855570664" r="1.883252093018493" fill="#ffffff" fillOpacity="0.7914670099804885">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6693877551020407s" values="1.883252093018493;0.9416260465092465;2.448227720924041;1.883252093018493"></animate>
            </circle><circle cx="268.70131968251457" cy="628.9883385870256" r="1.810068847828735" fill="#ffffff" fillOpacity="0.45146365820898926">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6704081632653061s" values="1.810068847828735;0.9050344239143675;2.3530895021773555;1.810068847828735"></animate>
            </circle><circle cx="1590.6447102534378" cy="323.44105307349156" r="1.432999832591669" fill="#ffffff" fillOpacity="0.7179293141800946">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6714285714285714s" values="1.432999832591669;0.7164999162958345;1.8628997823691698;1.432999832591669"></animate>
            </circle><circle cx="432.84948058261864" cy="90.71770878477118" r="1.4049007190433822" fill="#ffffff" fillOpacity="0.9208857190830484">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6724489795918367s" values="1.4049007190433822;0.7024503595216911;1.826370934756397;1.4049007190433822"></animate>
            </circle><circle cx="434.3468622503208" cy="112.84297994469831" r="1.4818441937005689" fill="#ffffff" fillOpacity="0.9015904244668328">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.673469387755102s" values="1.4818441937005689;0.7409220968502844;1.9263974518107396;1.4818441937005689"></animate>
            </circle><circle cx="463.90429596621397" cy="923.2705447794359" r="0.8799585785745836" fill="#ffffff" fillOpacity="0.1948221993202594">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6744897959183672s" values="0.8799585785745836;0.4399792892872918;1.1439461521469587;0.8799585785745836"></animate>
            </circle><circle cx="673.6475530377821" cy="571.4845403216707" r="1.1679080816715866" fill="#ffffff" fillOpacity="0.5016123194869151">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6755102040816325s" values="1.1679080816715866;0.5839540408357933;1.5182805061730626;1.1679080816715866"></animate>
            </circle><circle cx="996.2616124848068" cy="999.8126219136346" r="0.6694614240035116" fill="#ffffff" fillOpacity="0.1280703878660163">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6765306122448979s" values="0.6694614240035116;0.3347307120017558;0.8702998512045651;0.6694614240035116"></animate>
            </circle><circle cx="1176.570890738059" cy="112.25886175368423" r="1.158270614297891" fill="#ffffff" fillOpacity="0.9020998298659731">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6775510204081632s" values="1.158270614297891;0.5791353071489455;1.5057517985872582;1.158270614297891"></animate>
            </circle><circle cx="551.6363221106841" cy="359.89601752788116" r="1.0680566854605422" fill="#ffffff" fillOpacity="0.6861371940163826">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6785714285714285s" values="1.0680566854605422;0.5340283427302711;1.388473691098705;1.0680566854605422"></animate>
            </circle><circle cx="366.2767463196478" cy="842.4287386994678" r="0.6729378207457728" fill="#ffffff" fillOpacity="0.26532377438999905">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6795918367346938s" values="0.6729378207457728;0.3364689103728864;0.8748191669695047;0.6729378207457728"></animate>
            </circle><circle cx="1022.5654660806333" cy="354.7897079273325" r="1.0786140949964191" fill="#ffffff" fillOpacity="0.6905903709936053">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6806122448979591s" values="1.0786140949964191;0.5393070474982096;1.402198323495345;1.0786140949964191"></animate>
            </circle><circle cx="889.2885323953662" cy="173.30855769446094" r="1.7261377401582316" fill="#ffffff" fillOpacity="0.848858815964133">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6816326530612243s" values="1.7261377401582316;0.8630688700791158;2.243979062205701;1.7261377401582316"></animate>
            </circle><circle cx="1183.9238319843687" cy="672.635226256318" r="1.1603523657709822" fill="#ffffff" fillOpacity="0.4133995119857692">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6826530612244897s" values="1.1603523657709822;0.5801761828854911;1.508458075502277;1.1603523657709822"></animate>
            </circle><circle cx="741.5904076766851" cy="601.7395479802251" r="0.8634156290771948" fill="#ffffff" fillOpacity="0.4752271383893386">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.683673469387755s" values="0.8634156290771948;0.4317078145385974;1.1224403178003532;0.8634156290771948"></animate>
            </circle><circle cx="1027.5859458079317" cy="852.330530300723" r="1.0679768982018771" fill="#ffffff" fillOpacity="0.25668849101681135">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6846938775510203s" values="1.0679768982018771;0.5339884491009386;1.3883699676624404;1.0679768982018771"></animate>
            </circle><circle cx="122.51183755021202" cy="450.6194129946299" r="0.8639218904652277" fill="#ffffff" fillOpacity="0.6070179537837529">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6857142857142856s" values="0.8639218904652277;0.43196094523261386;1.123098457604796;0.8639218904652277"></animate>
            </circle><circle cx="726.9672928342654" cy="602.1167693412436" r="1.4813264076929467" fill="#ffffff" fillOpacity="0.4748981662721712">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6867346938775509s" values="1.4813264076929467;0.7406632038464733;1.9257243300008307;1.4813264076929467"></animate>
            </circle><circle cx="1611.0412809196007" cy="283.2567018924683" r="1.341794063799488" fill="#ffffff" fillOpacity="0.7529738064891265">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6877551020408162s" values="1.341794063799488;0.670897031899744;1.7443322829393346;1.341794063799488"></animate>
            </circle><circle cx="1095.3127319399343" cy="549.7830671032069" r="1.5711467727450201" fill="#ffffff" fillOpacity="0.5205380228751103">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6887755102040815s" values="1.5711467727450201;0.7855733863725101;2.0424908045685264;1.5711467727450201"></animate>
            </circle><circle cx="609.078346289283" cy="524.3951288681311" r="1.6585953654027037" fill="#ffffff" fillOpacity="0.5426786666847694">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6897959183673468s" values="1.6585953654027037;0.8292976827013518;2.1561739750235147;1.6585953654027037"></animate>
            </circle><circle cx="1127.6302835511367" cy="302.8737680185667" r="1.0506871911572402" fill="#ffffff" fillOpacity="0.735865899983808">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6908163265306121s" values="1.0506871911572402;0.5253435955786201;1.3658933485044122;1.0506871911572402"></animate>
            </circle><circle cx="891.9373869006168" cy="814.4706006302882" r="1.1873316321540974" fill="#ffffff" fillOpacity="0.2897058715433533">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6918367346938774s" values="1.1873316321540974;0.5936658160770487;1.5435311218003267;1.1873316321540974"></animate>
            </circle><circle cx="1471.597741956536" cy="633.3692172205818" r="1.4720828059483166" fill="#ffffff" fillOpacity="0.44764312451693444">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6928571428571427s" values="1.4720828059483166;0.7360414029741583;1.9137076477328117;1.4720828059483166"></animate>
            </circle><circle cx="372.6565553803045" cy="567.3063009905848" r="1.126770195306162" fill="#ffffff" fillOpacity="0.5052561328570482">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.693877551020408s" values="1.126770195306162;0.563385097653081;1.4648012538980106;1.126770195306162"></animate>
            </circle><circle cx="1527.9316585198162" cy="503.47317779309236" r="0.8322278914546047" fill="#ffffff" fillOpacity="0.5609245542502102">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6948979591836734s" values="0.8322278914546047;0.41611394572730237;1.0818962588909862;0.8322278914546047"></animate>
            </circle><circle cx="927.9594243699485" cy="624.9182049430215" r="1.4517473054585" fill="#ffffff" fillOpacity="0.4550131933636441">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6959183673469387s" values="1.4517473054585;0.72587365272925;1.88727149709605;1.4517473054585"></animate>
            </circle><circle cx="79.25850563479784" cy="500.95131437564896" r="0.8149117738232677" fill="#ffffff" fillOpacity="0.5631238537421666">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.696938775510204s" values="0.8149117738232677;0.40745588691163387;1.059385305970248;0.8149117738232677"></animate>
            </circle><circle cx="687.9517680020552" cy="218.37464647350174" r="1.3881078059120093" fill="#ffffff" fillOpacity="0.8095569943545042">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6979591836734693s" values="1.3881078059120093;0.6940539029560047;1.8045401476856122;1.3881078059120093"></animate>
            </circle><circle cx="364.6984401649219" cy="922.9876206334017" r="0.8383567188619798" fill="#ffffff" fillOpacity="0.19506893549412646">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6989795918367346s" values="0.8383567188619798;0.4191783594309899;1.0898637345205737;0.8383567188619798"></animate>
            </circle><circle cx="206.72014174103143" cy="954.9931165327768" r="1.1676934583756977" fill="#ffffff" fillOpacity="0.1671571658144389">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7s" values="1.1676934583756977;0.5838467291878489;1.5180014958884072;1.1676934583756977"></animate>
            </circle><circle cx="640.840692387857" cy="194.64879811018025" r="1.015913142286831" fill="#ffffff" fillOpacity="0.8302481411829824">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7010204081632653s" values="1.015913142286831;0.5079565711434155;1.3206870849728805;1.015913142286831"></animate>
            </circle><circle cx="1268.0711273524305" cy="831.4956563900012" r="1.8461840028401688" fill="#ffffff" fillOpacity="0.27485843919476644">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7020408163265306s" values="1.8461840028401688;0.9230920014200844;2.4000392036922196;1.8461840028401688"></animate>
            </circle><circle cx="165.11626117374576" cy="1009.1421534789515" r="0.8502429125911657" fill="#ffffff" fillOpacity="0.11993416847765857">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7030612244897958s" values="0.8502429125911657;0.42512145629558284;1.1053157863685155;0.8502429125911657"></animate>
            </circle><circle cx="550.1948127262281" cy="588.8343746785804" r="1.2950409126021047" fill="#ffffff" fillOpacity="0.4864816499896101">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7040816326530611s" values="1.2950409126021047;0.6475204563010524;1.6835531863827362;1.2950409126021047"></animate>
            </circle><circle cx="1430.0156873209553" cy="734.6825031699082" r="1.7570275907058897" fill="#ffffff" fillOpacity="0.35928851467740563">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7051020408163264s" values="1.7570275907058897;0.8785137953529448;2.2841358679176564;1.7570275907058897"></animate>
            </circle><circle cx="843.1304118375187" cy="267.5548866953917" r="1.2554278414328766" fill="#ffffff" fillOpacity="0.7666672499749491">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7061224489795918s" values="1.2554278414328766;0.6277139207164383;1.6320561938627396;1.2554278414328766"></animate>
            </circle><circle cx="588.6738492684422" cy="948.583678961758" r="1.2570742955873633" fill="#ffffff" fillOpacity="0.17274679160311807">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7071428571428571s" values="1.2570742955873633;0.6285371477936816;1.6341965842635724;1.2570742955873633"></animate>
            </circle><circle cx="627.9603369900738" cy="18.752561973583415" r="1.5167868901340558" fill="#ffffff" fillOpacity="0.9836460215346657">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7081632653061224s" values="1.5167868901340558;0.7583934450670279;1.9718229571742725;1.5167868901340558"></animate>
            </circle><circle cx="1062.1019334041127" cy="869.6242045690037" r="1.5608383352116115" fill="#ffffff" fillOpacity="0.24160679834098514">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7091836734693877s" values="1.5608383352116115;0.7804191676058058;2.0290898357750953;1.5608383352116115"></animate>
            </circle><circle cx="754.1919957013" cy="270.0268952777677" r="1.0183338619210491" fill="#ffffff" fillOpacity="0.7645114285368305">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7102040816326529s" values="1.0183338619210491;0.5091669309605246;1.323834020497364;1.0183338619210491"></animate>
            </circle><circle cx="670.2427234623183" cy="586.3469297406817" r="0.8107756756260934" fill="#ffffff" fillOpacity="0.48865093336568455">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7112244897959182s" values="0.8107756756260934;0.4053878378130467;1.0540083783139216;0.8107756756260934"></animate>
            </circle><circle cx="877.3955920962297" cy="364.5409876310597" r="1.1039057973885598" fill="#ffffff" fillOpacity="0.6820863479961689">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7122448979591836s" values="1.1039057973885598;0.5519528986942799;1.4350775366051278;1.1039057973885598"></animate>
            </circle><circle cx="329.57746387507564" cy="99.79156406093215" r="1.3495889463617587" fill="#ffffff" fillOpacity="0.9129724732026754">
              <animate attributeName="r" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7132653061224489s" values="1.3495889463617587;0.6747944731808794;1.7544656302702863;1.3495889463617587"></animate>
            </circle><g transform="translate(25.508401846205082 230.3686475536664) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="0s" values="1.1958886181991215;1.0762997563792094;1.3154774800190339;1.1958886181991215"></animateTransform>
              </polygon>
            </g><g transform="translate(2.1555419138928755 768.2702016481786) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.007142857142857142s" values="0.8605816793168828;0.7745235113851945;0.9466398472485711;0.8605816793168828"></animateTransform>
              </polygon>
            </g><g transform="translate(730.9858304292022 301.3325530766258) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.014285714285714284s" values="1.2176787396992843;1.095910865729356;1.339446613669213;1.2176787396992843"></animateTransform>
              </polygon>
            </g><g transform="translate(534.2192467695527 75.15519297274787) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.021428571428571422s" values="0.6695804267488656;0.6026223840739791;0.7365384694237522;0.6695804267488656"></animateTransform>
              </polygon>
            </g><g transform="translate(15.827313278249306 540.8232362739744) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.028571428571428567s" values="1.0640977344481028;0.9576879610032926;1.1705075078929132;1.0640977344481028"></animateTransform>
              </polygon>
            </g><g transform="translate(1274.1146116176224 847.76983985666) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.03571428571428571s" values="1.096737047243645;0.9870633425192806;1.2064107519680096;1.096737047243645"></animateTransform>
              </polygon>
            </g><g transform="translate(302.8017600830728 351.1983930077074) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.042857142857142844s" values="0.8175430852963919;0.7357887767667527;0.8992973938260311;0.8175430852963919"></animateTransform>
              </polygon>
            </g><g transform="translate(432.6267361280744 347.29697860916013) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.04999999999999999s" values="1.11649468025039;1.0048452122253508;1.228144148275429;1.11649468025039"></animateTransform>
              </polygon>
            </g><g transform="translate(1747.6950400412675 13.95549934727228) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.057142857142857134s" values="0.7654989716825917;0.6889490745143326;0.842048868850851;0.7654989716825917"></animateTransform>
              </polygon>
            </g><g transform="translate(1421.8378214000556 883.7796102354743) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.06428571428571428s" values="0.8493403147444307;0.7644062832699877;0.9342743462188738;0.8493403147444307"></animateTransform>
              </polygon>
            </g><g transform="translate(867.7778212363778 777.3718298034904) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07142857142857142s" values="0.8975680598780985;0.8078112538902886;0.9873248658659084;0.8975680598780985"></animateTransform>
              </polygon>
            </g><g transform="translate(851.3479093474405 690.9926078254487) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.07857142857142856s" values="0.728099163625762;0.6552892472631858;0.8009090799883383;0.728099163625762"></animateTransform>
              </polygon>
            </g><g transform="translate(659.9101653784136 783.9049967713793) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.08571428571428569s" values="0.9449693497774717;0.8504724147997246;1.039466284755219;0.9449693497774717"></animateTransform>
              </polygon>
            </g><g transform="translate(813.2544661602102 823.7379548189266) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09285714285714285s" values="1.0584649359332334;0.9526184423399101;1.1643114295265569;1.0584649359332334"></animateTransform>
              </polygon>
            </g><g transform="translate(309.5670396244214 585.5761015466202) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.09999999999999998s" values="0.8238169237164416;0.7414352313447974;0.9061986160880858;0.8238169237164416"></animateTransform>
              </polygon>
            </g><g transform="translate(1007.6019346376459 1015.7437524958352) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.10714285714285714s" values="1.1187977543938303;1.0069179789544473;1.2306775298332135;1.1187977543938303"></animateTransform>
              </polygon>
            </g><g transform="translate(563.3344586599788 390.2788313312558) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.11428571428571427s" values="0.6844269247730536;0.6159842322957482;0.752869617250359;0.6844269247730536"></animateTransform>
              </polygon>
            </g><g transform="translate(1335.2932887162663 657.1041412703263) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1214285714285714s" values="0.7199080528628217;0.6479172475765396;0.7918988581491039;0.7199080528628217"></animateTransform>
              </polygon>
            </g><g transform="translate(1698.091943271138 731.818938641359) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.12857142857142856s" values="1.2264326031213686;1.1037893428092318;1.3490758634335056;1.2264326031213686"></animateTransform>
              </polygon>
            </g><g transform="translate(1347.2984059648275 568.1047427703962) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1357142857142857s" values="1.216095954989347;1.0944863594904124;1.337705550488282;1.216095954989347"></animateTransform>
              </polygon>
            </g><g transform="translate(451.83301019343435 794.0464411971928) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.14285714285714285s" values="1.1402744510583267;1.026247005952494;1.2543018961641594;1.1402744510583267"></animateTransform>
              </polygon>
            </g><g transform="translate(1230.6941782656133 128.91417713629477) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.15s" values="1.1134045943474975;1.0020641349127477;1.2247450537822473;1.1134045943474975"></animateTransform>
              </polygon>
            </g><g transform="translate(405.46992657694284 228.44862642094358) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1571428571428571s" values="1.0722222146713616;0.9649999932042255;1.179444436138498;1.0722222146713616"></animateTransform>
              </polygon>
            </g><g transform="translate(528.7077635475978 999.9254357459117) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.16428571428571426s" values="1.2230696603676865;1.100762694330918;1.3453766264044553;1.2230696603676865"></animateTransform>
              </polygon>
            </g><g transform="translate(985.4659429172166 722.92742852849) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17142857142857137s" values="0.7040427009918476;0.6336384308926629;0.7744469710910324;0.7040427009918476"></animateTransform>
              </polygon>
            </g><g transform="translate(1528.7707318626162 942.8326034503821) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.17857142857142855s" values="0.8742590366786334;0.7868331330107701;0.9616849403464968;0.8742590366786334"></animateTransform>
              </polygon>
            </g><g transform="translate(1467.7087234322873 838.428581583722) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.1857142857142857s" values="0.6465616940853613;0.5819055246768252;0.7112178634938976;0.6465616940853613"></animateTransform>
              </polygon>
            </g><g transform="translate(1195.9177461017166 85.03242581242739) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19285714285714284s" values="0.8976698985135898;0.8079029086622308;0.9874368883649489;0.8976698985135898"></animateTransform>
              </polygon>
            </g><g transform="translate(1588.9314236371206 777.9900730804547) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.19999999999999996s" values="0.6889997289628346;0.6200997560665511;0.757899701859118;0.6889997289628346"></animateTransform>
              </polygon>
            </g><g transform="translate(335.3001586571439 438.49984577709375) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.20714285714285713s" values="1.0398368902880377;0.935853201259234;1.1438205793168417;1.0398368902880377"></animateTransform>
              </polygon>
            </g><g transform="translate(795.6509016078189 219.11948546699853) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.21428571428571427s" values="1.2494325492857465;1.1244892943571718;1.3743758042143213;1.2494325492857465"></animateTransform>
              </polygon>
            </g><g transform="translate(951.105996740724 740.2984122287485) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2214285714285714s" values="0.8745686844303904;0.7871118159873514;0.9620255528734295;0.8745686844303904"></animateTransform>
              </polygon>
            </g><g transform="translate(397.5570142082645 529.2673805585675) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.22857142857142854s" values="0.9428061826299677;0.848525564366971;1.0370868008929646;0.9428061826299677"></animateTransform>
              </polygon>
            </g><g transform="translate(116.80553759676961 168.95883970564597) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.23571428571428568s" values="1.0556556390347802;0.9500900751313022;1.1612212029382583;1.0556556390347802"></animateTransform>
              </polygon>
            </g><g transform="translate(785.6288266852425 272.3845321468612) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2428571428571428s" values="0.8399336645106766;0.7559402980596089;0.9239270309617443;0.8399336645106766"></animateTransform>
              </polygon>
            </g><g transform="translate(1138.835252985424 573.3438786551134) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.24999999999999997s" values="0.8980393583601987;0.8082354225241788;0.9878432941962186;0.8980393583601987"></animateTransform>
              </polygon>
            </g><g transform="translate(1418.0527098623757 765.2376316656427) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2571428571428571s" values="0.7240842462575637;0.6516758216318074;0.7964926708833202;0.7240842462575637"></animateTransform>
              </polygon>
            </g><g transform="translate(195.81529284578906 532.8671722044877) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.26428571428571423s" values="0.866712474974872;0.7800412274773848;0.9533837224723593;0.866712474974872"></animateTransform>
              </polygon>
            </g><g transform="translate(624.2890968160425 479.76565961672856) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2714285714285714s" values="1.25924303507893;1.1333187315710371;1.3851673385868233;1.25924303507893"></animateTransform>
              </polygon>
            </g><g transform="translate(1754.9999457283554 900.5776421164638) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2785714285714285s" values="0.9441867500664901;0.8497680750598411;1.0386054250731391;0.9441867500664901"></animateTransform>
              </polygon>
            </g><g transform="translate(1551.8928301443539 656.6668690791857) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2857142857142857s" values="1.2156075685435417;1.0940468116891875;1.3371683253978959;1.2156075685435417"></animateTransform>
              </polygon>
            </g><g transform="translate(1288.8652706572911 660.9427964201021) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.2928571428571428s" values="1.197854943939916;1.0780694495459244;1.3176404383339078;1.197854943939916"></animateTransform>
              </polygon>
            </g><g transform="translate(1431.0053142716217 1031.819005492125) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3s" values="1.062994285266686;0.9566948567400174;1.1692937137933548;1.062994285266686"></animateTransform>
              </polygon>
            </g><g transform="translate(138.60973224384685 617.9992040905381) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3071428571428571s" values="0.6659490424206255;0.599354138178563;0.7325439466626881;0.6659490424206255"></animateTransform>
              </polygon>
            </g><g transform="translate(1603.8009345710218 837.2331184236982) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3142857142857142s" values="0.7998917598482628;0.7199025838634365;0.8798809358330891;0.7998917598482628"></animateTransform>
              </polygon>
            </g><g transform="translate(914.7677740630634 556.1454689624933) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3214285714285714s" values="1.0056759566192597;0.9051083609573337;1.1062435522811858;1.0056759566192597"></animateTransform>
              </polygon>
            </g><g transform="translate(1249.9327482816047 692.3799236851186) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3285714285714285s" values="1.0590084188018145;0.9531075769216331;1.164909260681996;1.0590084188018145"></animateTransform>
              </polygon>
            </g><g transform="translate(147.39877177612382 727.5815808735736) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3357142857142857s" values="0.8569610265647154;0.7712649239082439;0.942657129221187;0.8569610265647154"></animateTransform>
              </polygon>
            </g><g transform="translate(1199.9760445136699 758.097834279406) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.34285714285714275s" values="0.9903771778767837;0.8913394600891054;1.0894148956644623;0.9903771778767837"></animateTransform>
              </polygon>
            </g><g transform="translate(1618.8637631603744 938.2047371096987) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3499999999999999s" values="1.1765106875757905;1.0588596188182116;1.2941617563333696;1.1765106875757905"></animateTransform>
              </polygon>
            </g><g transform="translate(901.4916572635482 215.83739258631888) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3571428571428571s" values="1.0806219296714785;0.9725597367043307;1.1886841226386264;1.0806219296714785"></animateTransform>
              </polygon>
            </g><g transform="translate(1548.3019882467668 359.4708066599685) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3642857142857142s" values="0.75058710425416;0.675528393828744;0.8256458146795761;0.75058710425416"></animateTransform>
              </polygon>
            </g><g transform="translate(1213.5230695645087 226.5631547648581) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3714285714285714s" values="1.0683498530888014;0.9615148677799212;1.1751848383976815;1.0683498530888014"></animateTransform>
              </polygon>
            </g><g transform="translate(1184.5546846212947 574.9724789072787) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.37857142857142856s" values="1.0600143975377572;0.9540129577839814;1.166015837291533;1.0600143975377572"></animateTransform>
              </polygon>
            </g><g transform="translate(1042.6026705654087 140.4178695817871) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3857142857142857s" values="1.2497963098981815;1.1248166789083633;1.3747759408879998;1.2497963098981815"></animateTransform>
              </polygon>
            </g><g transform="translate(984.7968235713346 755.0588346890996) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3928571428571428s" values="0.6812250304608836;0.6131025274147952;0.749347533506972;0.6812250304608836"></animateTransform>
              </polygon>
            </g><g transform="translate(142.12621771756758 245.85030316100514) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.3999999999999999s" values="1.007719561578229;0.9069476054204062;1.1084915177360521;1.007719561578229"></animateTransform>
              </polygon>
            </g><g transform="translate(1254.988170973518 795.1639292804078) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4071428571428571s" values="1.2469168469211;1.12222516222899;1.37160853161321;1.2469168469211"></animateTransform>
              </polygon>
            </g><g transform="translate(1756.369214801186 873.3617826345588) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.41428571428571426s" values="1.084136592400491;0.975722933160442;1.1925502516405404;1.084136592400491"></animateTransform>
              </polygon>
            </g><g transform="translate(1687.3734934567997 753.3983988530692) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4214285714285714s" values="0.9151172910327032;0.8236055619294329;1.0066290201359736;0.9151172910327032"></animateTransform>
              </polygon>
            </g><g transform="translate(1248.5179778188365 608.3386446383684) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.42857142857142855s" values="0.6484227202668258;0.5835804482401432;0.7132649922935085;0.6484227202668258"></animateTransform>
              </polygon>
            </g><g transform="translate(1053.4076570719412 500.00945094662933) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4357142857142856s" values="0.8119906180934557;0.7307915562841102;0.8931896799028014;0.8119906180934557"></animateTransform>
              </polygon>
            </g><g transform="translate(779.089805636172 658.6285490844754) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4428571428571428s" values="0.8565688121074412;0.7709119308966971;0.9422256933181854;0.8565688121074412"></animateTransform>
              </polygon>
            </g><g transform="translate(1119.897041723372 205.87877250131166) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.44999999999999996s" values="0.7197922786184805;0.6478130507566324;0.7917715064803286;0.7197922786184805"></animateTransform>
              </polygon>
            </g><g transform="translate(637.4425174464162 631.5887728661754) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4571428571428571s" values="1.0253777108277062;0.9228399397449356;1.1279154819104769;1.0253777108277062"></animateTransform>
              </polygon>
            </g><g transform="translate(173.4015960733262 799.4424061144492) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.46428571428571425s" values="0.8569407132868753;0.7712466419581877;0.9426347846155628;0.8569407132868753"></animateTransform>
              </polygon>
            </g><g transform="translate(680.4600844960696 816.8737308193399) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47142857142857136s" values="0.9662709571369668;0.8696438614232701;1.0628980528506635;0.9662709571369668"></animateTransform>
              </polygon>
            </g><g transform="translate(1016.1945345739044 774.1680331681908) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.47857142857142854s" values="0.9650254477457717;0.8685229029711945;1.061527992520349;0.9650254477457717"></animateTransform>
              </polygon>
            </g><g transform="translate(55.97293381267896 124.12254430860241) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.4857142857142856s" values="1.0951029680398083;0.9855926712358275;1.2046132648437893;1.0951029680398083"></animateTransform>
              </polygon>
            </g><g transform="translate(65.60721167791866 843.5950865747272) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49285714285714277s" values="0.684158635006321;0.6157427715056889;0.7525744985069531;0.684158635006321"></animateTransform>
              </polygon>
            </g><g transform="translate(841.2300896873408 519.1672432082281) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.49999999999999994s" values="0.9196808042826893;0.8277127238544204;1.0116488847109584;0.9196808042826893"></animateTransform>
              </polygon>
            </g><g transform="translate(93.9559496335837 834.7896845172606) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5071428571428571s" values="0.8059151636601114;0.7253236472941003;0.8865066800261227;0.8059151636601114"></animateTransform>
              </polygon>
            </g><g transform="translate(354.39708849750906 690.0153225009149) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5142857142857142s" values="1.1929454226656993;1.0736508803991294;1.3122399649322694;1.1929454226656993"></animateTransform>
              </polygon>
            </g><g transform="translate(785.2506000204793 723.629938009025) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5214285714285714s" values="0.7562030265324785;0.6805827238792307;0.8318233291857264;0.7562030265324785"></animateTransform>
              </polygon>
            </g><g transform="translate(1474.4660134755684 417.23652924085314) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5285714285714285s" values="1.0375634146034838;0.9338070731431354;1.1413197560638322;1.0375634146034838"></animateTransform>
              </polygon>
            </g><g transform="translate(808.7429408108927 629.137200726131) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5357142857142856s" values="0.9335717942166445;0.84021461479498;1.026928973638309;0.9335717942166445"></animateTransform>
              </polygon>
            </g><g transform="translate(180.78765623321448 492.5732933708024) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5428571428571428s" values="1.0905556404419317;0.9815000763977385;1.199611204486125;1.0905556404419317"></animateTransform>
              </polygon>
            </g><g transform="translate(696.8787776762707 968.1502040289946) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5499999999999999s" values="0.8096209401112892;0.7286588461001603;0.8905830341224181;0.8096209401112892"></animateTransform>
              </polygon>
            </g><g transform="translate(725.2130128622007 661.792715412492) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.557142857142857s" values="0.687288207608376;0.6185593868475384;0.7560170283692136;0.687288207608376"></animateTransform>
              </polygon>
            </g><g transform="translate(469.7161984252257 411.9246853096978) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5642857142857143s" values="1.0380584447243237;0.9342526002518914;1.1418642891967563;1.0380584447243237"></animateTransform>
              </polygon>
            </g><g transform="translate(1638.0768387783746 435.4463729262106) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5714285714285714s" values="0.920465498107854;0.8284189482970686;1.0125120479186396;0.920465498107854"></animateTransform>
              </polygon>
            </g><g transform="translate(1311.6487136999096 442.6342326632898) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5785714285714285s" values="1.0412381763176148;0.9371143586858534;1.1453619939493764;1.0412381763176148"></animateTransform>
              </polygon>
            </g><g transform="translate(1276.9241325278972 323.1170030181971) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5857142857142856s" values="1.2092135747482362;1.0882922172734126;1.33013493222306;1.2092135747482362"></animateTransform>
              </polygon>
            </g><g transform="translate(51.03427713056963 284.9890154516672) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.5928571428571427s" values="1.1269151264679296;1.0142236138211367;1.2396066391147227;1.1269151264679296"></animateTransform>
              </polygon>
            </g><g transform="translate(407.7834460466897 662.0619922530485) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6s" values="1.0438953371056388;0.939505803395075;1.1482848708162028;1.0438953371056388"></animateTransform>
              </polygon>
            </g><g transform="translate(1441.6208367102795 926.8306826044065) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6071428571428571s" values="0.9046285755403897;0.8141657179863507;0.9950914330944287;0.9046285755403897"></animateTransform>
              </polygon>
            </g><g transform="translate(1383.4448412234403 60.29905779651415) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6142857142857142s" values="0.7029099938338468;0.6326189944504621;0.7732009932172316;0.7029099938338468"></animateTransform>
              </polygon>
            </g><g transform="translate(1052.4797809803883 1026.386597219088) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6214285714285713s" values="0.635623130852672;0.5720608177674048;0.6991854439379392;0.635623130852672"></animateTransform>
              </polygon>
            </g><g transform="translate(649.1570280653192 963.2198353903117) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6285714285714284s" values="1.1689129748095761;1.0520216773286186;1.2858042722905338;1.1689129748095761"></animateTransform>
              </polygon>
            </g><g transform="translate(1515.242175801042 156.50227381436468) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6357142857142857s" values="1.163849736991853;1.0474647632926677;1.2802347106910383;1.163849736991853"></animateTransform>
              </polygon>
            </g><g transform="translate(676.9077437521408 650.8393469504808) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6428571428571428s" values="0.7256799776274936;0.6531119798647442;0.7982479753902431;0.7256799776274936"></animateTransform>
              </polygon>
            </g><g transform="translate(1667.0373738593446 50.56985175684843) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6499999999999999s" values="1.1906758918443217;1.0716083026598895;1.3097434810287538;1.1906758918443217"></animateTransform>
              </polygon>
            </g><g transform="translate(1250.8657054218943 775.3439863271427) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.657142857142857s" values="0.7691319870865645;0.6922187883779081;0.846045185795221;0.7691319870865645"></animateTransform>
              </polygon>
            </g><g transform="translate(561.2156540456721 511.4632559551374) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6642857142857141s" values="0.8749106180002186;0.7874195562001968;0.9624016798002406;0.8749106180002186"></animateTransform>
              </polygon>
            </g><g transform="translate(301.7837591601579 689.4959169309983) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6714285714285714s" values="1.0684296089413685;0.9615866480472317;1.1752725698355055;1.0684296089413685"></animateTransform>
              </polygon>
            </g><g transform="translate(1325.6079362289383 14.157408876554681) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6785714285714285s" values="0.7039310043720389;0.633537903934835;0.7743241048092429;0.7039310043720389"></animateTransform>
              </polygon>
            </g><g transform="translate(147.6373173554735 229.27158645499222) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6857142857142855s" values="1.1767915748905187;1.0591124174014668;1.2944707323795706;1.1767915748905187"></animateTransform>
              </polygon>
            </g><g transform="translate(493.5975632483388 545.0383506069326) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6928571428571427s" values="0.8305442938907782;0.7474898645017004;0.9135987232798561;0.8305442938907782"></animateTransform>
              </polygon>
            </g><g transform="translate(93.80654239481774 680.0618306750345) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.6999999999999998s" values="1.083694129240717;0.9753247163166453;1.1920635421647887;1.083694129240717"></animateTransform>
              </polygon>
            </g><g transform="translate(472.8203891237904 5.525375244641349) scale(0.5)">
              <polygon fill="#ffffff" points="0,-10 3.5,-4.46 10,0 3.5,3.5 0,10 -4.4,3.5 -10,0 -4.46,-4.46">
                <animateTransform attributeName="transform" type="scale" dur="0.7142857142857142s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcmod="spline" keySplines="0.2 0 0.8 1;0.2 0 0.8 1;0.2 0 0.8 1" begin="-0.7071428571428571s" values="0.8732842012196045;0.7859557810976441;0.960612621341565;0.8732842012196045"></animateTransform>
              </polygon>
            </g><circle cx="1320" cy="258" r="35.088" fill="url(#lg-0.40487933951331345)"></circle>
            <g transform="translate(1320 258) rotate(135)">
              <path d="M-35.088 0 A35.088 35.088 0 0 1 35.088 0 A35.088 18.94752 0 0 0 -35.088 0" fill="#fffdeb"></path>
            </g></g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:"auto",background:"#f2f2f2",display:"block",zIndex:1, position:"relative"}} width="1931" height="1349" preserveAspectRatio="xMidYMid" viewBox="0 0 1931 1349">
          <g transform="translate(965.5,674.5) scale(1,1) translate(-965.5,-674.5)"><defs>
            <path id="path-d8k7avqz61f-1" d="M-35 -35L35 -35L35 35L-35 35Z" fill="none" stroke="inherit" strokeWidth="11.515151515151516" transform="scale(0.33)"></path>
            <path id="path-d8k7avqz61f-2" d="M0 -37A37 37 0 0 1 0 37A37 37 0 0 1 0 -37" fill="none" stroke="inherit" strokeWidth="11.515151515151516" transform="scale(0.33)"></path>
            <path id="path-d8k7avqz61f-3" d="M0 -34.641L40 34.641L-40 34.641Z" fill="none" stroke="inherit" strokeWidth="11.515151515151516" transform="scale(0.33)"></path>
          </defs><path id="path0" d="M 66.2426701218297 1206.898900217672
c 0 51.133210249594086 -12.511317401496424 14.687198688713195 -27.19851609020962 14.687198688713195
S 11.84563794141047 1258.0321104672662 11.84563794141047 1206.898900217672
s 12.511317401496424 -14.687198688713195 27.19851609020962 -14.687198688713195
S 66.2426701218297 1155.7656899680778 66.2426701218297 1206.898900217672
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-3.680898912799954s" dur="10.738565977514252s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path0"></mpath>
              </animateMotion>
            </use><path id="path1" d="M 84.24835899972223 281.6765882863199
c 0 54.20387488680991 -13.262650238262 15.569198105785826 -28.831848344047827 15.569198105785826
S 26.584662311626573 335.8804631731298 26.584662311626573 281.6765882863199
s 13.262650238262 -15.569198105785826 28.831848344047827 -15.569198105785826
S 84.24835899972223 227.47271339950998 84.24835899972223 281.6765882863199
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.230259942894827s" dur="17.094554068476782s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path1"></mpath>
              </animateMotion>
            </use><path id="path2" d="M 117.46038500198375 623.7961325127807
c 0 46.20893602705809 -11.306441793854637 13.272779497133707 -24.579221290988343 13.272779497133707
S 68.30194242000707 670.0050685398387 68.30194242000707 623.7961325127807
s 11.306441793854637 -13.272779497133707 24.579221290988343 -13.272779497133707
S 117.46038500198375 577.5871964857226 117.46038500198375 623.7961325127807
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.4610107963131465s" dur="10.606783920185277s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path2"></mpath>
              </animateMotion>
            </use><path id="path3" d="M 108.23519266512099 1189.2498261933686
c 0 32.65755179791087 -7.990677567573935 9.380360622804186 -17.371038190378123 9.380360622804186
S 73.49311628436473 1221.9073779912794 73.49311628436473 1189.2498261933686
s 7.990677567573935 -9.380360622804186 17.371038190378123 -9.380360622804186
S 108.23519266512099 1156.5922743954577 108.23519266512099 1189.2498261933686
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.0685447268012025s" dur="10.547454174884338s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path3"></mpath>
              </animateMotion>
            </use><path id="path4" d="M 146.52692310986487 912.1233660116211
c 0 53.95334101620337 -13.201349397581673 15.49723624933501 -28.698585646916683 15.49723624933501
S 89.12975181603151 966.0767070278245 89.12975181603151 912.1233660116211
s 13.201349397581673 -15.49723624933501 28.698585646916683 -15.49723624933501
S 146.52692310986487 858.1700249954177 146.52692310986487 912.1233660116211
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.943001361285609s" dur="13.190111941826137s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path4"></mpath>
              </animateMotion>
            </use><path id="path5" d="M 193.03826335173756 305.41531317558105
c 0 49.453086460178845 -12.100223282809717 14.20460994068967 -26.304833223499386 14.20460994068967
S 140.4285969047388 354.8683996357599 140.4285969047388 305.41531317558105
s 12.100223282809717 -14.20460994068967 26.304833223499386 -14.20460994068967
S 193.03826335173756 255.9622267154022 193.03826335173756 305.41531317558105
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-3.2750387605341076s" dur="9.66278557935216s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path5"></mpath>
              </animateMotion>
            </use><path id="path6" d="M 205.85334225251037 579.5400788884481
c 0 43.13055634434822 -10.553221233191584 12.38856405635534 -22.941785289546925 12.38856405635534
S 159.96977167341655 622.6706352327963 159.96977167341655 579.5400788884481
s 10.553221233191584 -12.38856405635534 22.941785289546925 -12.38856405635534
S 205.85334225251037 536.4095225440999 205.85334225251037 579.5400788884481
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.1873853891894717s" dur="9.593961506905654s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path6"></mpath>
              </animateMotion>
            </use><path id="path7" d="M 225.1425925590757 452.21154821315156
c 0 63.88169023174607 -15.630626333299569 18.348996130395147 -33.97962246369472 18.348996130395147
S 157.18334763168627 516.0932384448977 157.18334763168627 452.21154821315156
s 15.630626333299569 -18.348996130395147 33.97962246369472 -18.348996130395147
S 225.1425925590757 388.3298579814055 225.1425925590757 452.21154821315156
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.2748436283267344s" dur="13.363786015534474s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path7"></mpath>
              </animateMotion>
            </use><path id="path8" d="M 227.23007739321073 437.3414491499292
c 0 28.27970439620734 -6.919502139497539 8.122893815931896 -15.042395955429434 8.122893815931896
S 197.14528548235185 465.62115354613655 197.14528548235185 437.3414491499292
s 6.919502139497539 -8.122893815931896 15.042395955429434 -8.122893815931896
S 227.23007739321073 409.0617447537218 227.23007739321073 437.3414491499292
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.78028095042711s" dur="15.712892516933305s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path8"></mpath>
              </animateMotion>
            </use><path id="path9" d="M 257.4182271746313 1302.461220658831
c 0 40.16043121916339 -9.826488489795297 11.535443009759698 -21.361931499554995 11.535443009759698
S 214.6943641755213 1342.6216518779945 214.6943641755213 1302.461220658831
s 9.826488489795297 -11.535443009759698 21.361931499554995 -11.535443009759698
S 257.4182271746313 1262.3007894396676 257.4182271746313 1302.461220658831
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.6874050218247392s" dur="10.430069955785376s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path9"></mpath>
              </animateMotion>
            </use><path id="path10" d="M 291.4569075042442 1326.7300249851075
c 0 29.446668343076936 -7.205035871178398 8.458085587905078 -15.663121459083476 8.458085587905078
S 260.1306645860773 1356.1766933281845 260.1306645860773 1326.7300249851075
s 7.205035871178398 -8.458085587905078 15.663121459083476 -8.458085587905078
S 291.4569075042442 1297.2833566420306 291.4569075042442 1326.7300249851075
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.15701591664263s" dur="12.79402091777977s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path10"></mpath>
              </animateMotion>
            </use><path id="path11" d="M 305.60180658695003 988.6954344993615
c 0 25.394763107652103 -6.213612249744663 7.294240467091561 -13.507852716836224 7.294240467091561
S 278.5861011532776 1014.0901976070136 278.5861011532776 988.6954344993615
s 6.213612249744663 -7.294240467091561 13.507852716836224 -7.294240467091561
S 305.60180658695003 963.3006713917093 305.60180658695003 988.6954344993615
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.4317690159048015s" dur="9.334821216446826s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path11"></mpath>
              </animateMotion>
            </use><path id="path12" d="M 359.7400896722326 1166.4052142592525
c 0 57.41093009353075 -14.04735523565114 16.490373537503515 -30.537728773154655 16.490373537503515
S 298.66463212592333 1223.8161443527833 298.66463212592333 1166.4052142592525
s 14.04735523565114 -16.490373537503515 30.537728773154655 -16.490373537503515
S 359.7400896722326 1108.9942841657216 359.7400896722326 1166.4052142592525
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.313499280465953s" dur="15.501899503592592s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path12"></mpath>
              </animateMotion>
            </use><path id="path13" d="M 375.7556398269041 219.82022824834615
c 0 51.964677234270276 -12.71476145093847 14.926024311971249 -27.64078576290972 14.926024311971249
S 320.4740683010846 271.7849054826164 320.4740683010846 219.82022824834615
s 12.71476145093847 -14.926024311971249 27.64078576290972 -14.926024311971249
S 375.7556398269041 167.85555101407587 375.7556398269041 219.82022824834615
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.05035940530317663s" dur="9.602167679754496s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path13"></mpath>
              </animateMotion>
            </use><path id="path14" d="M 383.12625493625137 36.495901598963655
c 0 31.46271171738633 -7.698323079786016 9.037161876270542 -16.73548495605656 9.037161876270542
S 349.65528502413827 67.95861331634998 349.65528502413827 36.495901598963655
s 7.698323079786016 -9.037161876270542 16.73548495605656 -9.037161876270542
S 383.12625493625137 5.033189881577325 383.12625493625137 36.495901598963655
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.9198316854125586s" dur="14.141274227050838s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path14"></mpath>
              </animateMotion>
            </use><path id="path15" d="M 410.3167689137956 931.0223811550138
c 0 43.43368943572834 -10.627392095976083 12.475634199624098 -23.10302629560018 12.475634199624098
S 364.1107163225953 974.4560705907421 364.1107163225953 931.0223811550138
s 10.627392095976083 -12.475634199624098 23.10302629560018 -12.475634199624098
S 410.3167689137956 887.5886917192855 410.3167689137956 931.0223811550138
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.355647502225929s" dur="14.105162485558399s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path15"></mpath>
              </animateMotion>
            </use><path id="path16" d="M 438.55303758064247 225.06565183591582
c 0 49.96095657384663 -12.224489374451833 14.350487526530417 -26.57497690098225 14.350487526530417
S 385.4030837786779 275.02660840976245 385.4030837786779 225.06565183591582
s 12.224489374451833 -14.350487526530417 26.57497690098225 -14.350487526530417
S 438.55303758064247 175.10469526206919 438.55303758064247 225.06565183591582
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-4.019418343617126s" dur="14.391220237678933s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path16"></mpath>
              </animateMotion>
            </use><path id="path17" d="M 439.4497382516119 403.94488166941306
c 0 19.338838901748417 -4.731843561066102 5.554772876034121 -10.286616437100221 5.554772876034121
S 418.87650537741143 423.2837205711615 418.87650537741143 403.94488166941306
s 4.731843561066102 -5.554772876034121 10.286616437100221 -5.554772876034121
S 439.4497382516119 384.60604276766463 439.4497382516119 403.94488166941306
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-3.1066097993817805s" dur="11.769572189005606s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path17"></mpath>
              </animateMotion>
            </use><path id="path18" d="M 475.265614271722 140.19056148261768
c 0 27.54734829934813 -6.740308626436244 7.9125362136425474 -14.652844840078792 7.9125362136425474
S 445.9599245915644 167.7379097819658 445.9599245915644 140.19056148261768
s 6.740308626436244 -7.9125362136425474 14.652844840078792 -7.9125362136425474
S 475.265614271722 112.64321318326955 475.265614271722 140.19056148261768
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-3.9636641344425794s" dur="12.030214753157342s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path18"></mpath>
              </animateMotion>
            </use><path id="path19" d="M 498.70466623404843 933.026213378659
c 0 39.42273455620613 -9.645988242475967 11.323551415080486 -20.969539657556453 11.323551415080486
S 456.7655869189356 972.4489479348651 456.7655869189356 933.026213378659
s 9.645988242475967 -11.323551415080486 20.969539657556453 -11.323551415080486
S 498.70466623404843 893.6034788224529 498.70466623404843 933.026213378659
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.2482065432679776s" dur="12.68686197314592s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path19"></mpath>
              </animateMotion>
            </use><path id="path20" d="M 538.0317645985679 32.39809789448436
c 0 53.93840295061237 -13.19769433897962 15.492945528367382 -28.690639867347002 15.492945528367382
S 480.6504848638739 86.33650084509674 480.6504848638739 32.39809789448436
s 13.19769433897962 -15.492945528367382 28.690639867347002 -15.492945528367382
S 538.0317645985679 -21.540305056128012 538.0317645985679 32.39809789448436
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.317301528870672s" dur="13.369103273667534s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path20"></mpath>
              </animateMotion>
            </use><path id="path21" d="M 558.1981366741019 627.9576123217284
c 0 52.51568005494684 -12.849581290040183 15.08429107961239 -27.933872369652573 15.08429107961239
S 502.3303919347967 680.4732923766753 502.3303919347967 627.9576123217284
s 12.849581290040183 -15.08429107961239 27.933872369652573 -15.08429107961239
S 558.1981366741019 575.4419322667816 558.1981366741019 627.9576123217284
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.8676343994868303s" dur="16.472333896575986s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path21"></mpath>
              </animateMotion>
            </use><path id="path22" d="M 593.2197281319776 451.19909728086856
c 0 50.549176558891986 -12.368415541005485 14.51944433074557 -26.887859871751054 14.51944433074557
S 539.4440083884755 501.74827383976054 539.4440083884755 451.19909728086856
s 12.368415541005485 -14.51944433074557 26.887859871751054 -14.51944433074557
S 593.2197281319776 400.64992072197657 593.2197281319776 451.19909728086856
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-3.0664087230407784s" dur="15.087960026277917s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path22"></mpath>
              </animateMotion>
            </use><path id="path23" d="M 599.4273631933174 1114.2994952054698
c 0 29.16772010633173 -7.136782579208826 8.377962158201667 -15.514744737410492 8.377962158201667
S 568.3978737184964 1143.4672153118015 568.3978737184964 1114.2994952054698
s 7.136782579208826 -8.377962158201667 15.514744737410492 -8.377962158201667
S 599.4273631933174 1085.1317750991382 599.4273631933174 1114.2994952054698
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.165331727763303s" dur="16.438650942275537s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path23"></mpath>
              </animateMotion>
            </use><path id="path24" d="M 630.4722316993663 851.2896987457113
c 0 40.44318045682839 -9.895671813904817 11.616658216323048 -21.512330030227865 11.616658216323048
S 587.4475716389105 891.7328792025397 587.4475716389105 851.2896987457113
s 9.895671813904817 -11.616658216323048 21.512330030227865 -11.616658216323048
S 630.4722316993663 810.846518288883 630.4722316993663 851.2896987457113
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.111474661178374s" dur="10.987641959998669s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path24"></mpath>
              </animateMotion>
            </use><path id="path25" d="M 635.5003809528115 95.78372111591239
c 0 41.280616506919046 -10.10057637935253 11.857198358370365 -21.957774737722893 11.857198358370365
S 591.5848314773658 137.06433762283143 591.5848314773658 95.78372111591239
s 10.10057637935253 -11.857198358370365 21.957774737722893 -11.857198358370365
S 635.5003809528115 54.50310460899334 635.5003809528115 95.78372111591239
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-4.178381260551141s" dur="13.29425456278255s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path25"></mpath>
              </animateMotion>
            </use><path id="path26" d="M 659.1374700252271 1234.0691875936775
c 0 42.3534613728619 -10.36308097421089 12.165355926247567 -22.52843690045846 12.165355926247567
S 614.0805962243102 1276.4226489665393 614.0805962243102 1234.0691875936775
s 10.36308097421089 -12.165355926247567 22.52843690045846 -12.165355926247567
S 659.1374700252271 1191.7157262208157 659.1374700252271 1234.0691875936775
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.1708536908109093s" dur="9.45706891384112s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path26"></mpath>
              </animateMotion>
            </use><path id="path27" d="M 675.5201940178739 177.19094469801053
c 0 24.78361904037316 -6.064076999240241 7.118699086064631 -13.182776085304873 7.118699086064631
S 649.1546418472641 201.9745637383837 649.1546418472641 177.19094469801053
s 6.064076999240241 -7.118699086064631 13.182776085304873 -7.118699086064631
S 675.5201940178739 152.40732565763736 675.5201940178739 177.19094469801053
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.192070955377245s" dur="13.698673854760287s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path27"></mpath>
              </animateMotion>
            </use><path id="path28" d="M 735.4042797645186 1037.0864609710814
c 0 52.98413718902771 -12.964203780294014 15.218847915997321 -28.183051696291336 15.218847915997321
S 679.0381763719358 1090.070598160109 679.0381763719358 1037.0864609710814
s 12.964203780294014 -15.218847915997321 28.183051696291336 -15.218847915997321
S 735.4042797645186 984.1023237820536 735.4042797645186 1037.0864609710814
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.4830503410775395s" dur="13.488915551052628s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path28"></mpath>
              </animateMotion>
            </use><path id="path29" d="M 753.6838341087033 485.5114499331882
c 0 51.199902349163715 -12.527635681178355 14.70635493007894 -27.233990611257294 14.70635493007894
S 699.2158528861888 536.7113522823519 699.2158528861888 485.5114499331882
s 12.527635681178355 -14.70635493007894 27.233990611257294 -14.70635493007894
S 753.6838341087033 434.3115475840245 753.6838341087033 485.5114499331882
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.6987539246911467s" dur="15.36026913788668s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path29"></mpath>
              </animateMotion>
            </use><path id="path30" d="M 767.7204989970668 446.89083572158046
c 0 60.30988539523515 -14.756674086068172 17.323052187993074 -32.079726274061244 17.323052187993074
S 703.5610464489442 507.2007211168156 703.5610464489442 446.89083572158046
s 14.756674086068172 -17.323052187993074 32.079726274061244 -17.323052187993074
S 767.7204989970668 386.5809503263453 767.7204989970668 446.89083572158046
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.5652782929369973s" dur="11.033749512846398s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path30"></mpath>
              </animateMotion>
            </use><path id="path31" d="M 773.9285509385733 937.194384043632
c 0 31.3986977456389 -7.682660086698878 9.01877488438564 -16.70143497108452 9.01877488438564
S 740.5256809964043 968.5930817892709 740.5256809964043 937.194384043632
s 7.682660086698878 -9.01877488438564 16.70143497108452 -9.01877488438564
S 773.9285509385733 905.7956862979931 773.9285509385733 937.194384043632
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.5434624646937503s" dur="15.768123545145592s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path31"></mpath>
              </animateMotion>
            </use><path id="path32" d="M 809.6820157379791 625.8100458640791
c 0 60.38134427381398 -14.774158705294909 17.34357761056359 -32.1177363158585 17.34357761056359
S 745.4465431062622 686.1913901378931 745.4465431062622 625.8100458640791
s 14.774158705294909 -17.34357761056359 32.1177363158585 -17.34357761056359
S 809.6820157379791 565.4287015902652 809.6820157379791 625.8100458640791
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.22257466636275s" dur="16.304803248913196s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path32"></mpath>
              </animateMotion>
            </use><path id="path33" d="M 844.4683007040217 40.27461917552971
c 0 39.808567564412215 -9.74039419129235 11.434375789777976 -21.174769981070327 11.434375789777976
S 802.118760741881 80.08318673994192 802.118760741881 40.27461917552971
s 9.74039419129235 -11.434375789777976 21.174769981070327 -11.434375789777976
S 844.4683007040217 0.4660516111174928 844.4683007040217 40.27461917552971
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.4624275996041058s" dur="14.292324773665888s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path33"></mpath>
              </animateMotion>
            </use><path id="path34" d="M 866.5746556608965 585.0465784032408
c 0 39.74997387652145 -9.726057437872269 11.417545687937013 -21.143603125809282 11.417545687937013
S 824.287449409278 624.7965522797623 824.287449409278 585.0465784032408
s 9.726057437872269 -11.417545687937013 21.143603125809282 -11.417545687937013
S 866.5746556608965 545.2966045267193 866.5746556608965 585.0465784032408
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.7991223873879594s" dur="15.131063788704067s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path34"></mpath>
              </animateMotion>
            </use><path id="path35" d="M 870.0346769274664 1039.5677274310203
c 0 38.801359106654886 -9.4939495686496 11.145071232762575 -20.639020801412173 11.145071232762575
S 828.7566353246422 1078.3690865376752 828.7566353246422 1039.5677274310203
s 9.4939495686496 -11.145071232762575 20.639020801412173 -11.145071232762575
S 870.0346769274664 1000.7663683243654 870.0346769274664 1039.5677274310203
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.0359656924678873s" dur="10.611054257916903s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path35"></mpath>
              </animateMotion>
            </use><path id="path36" d="M 894.4391958859915 919.228155361652
c 0 30.377130559699264 -7.432702158224287 8.725346011828512 -16.158048170052798 8.725346011828512
S 862.1230995458859 949.6052859213512 862.1230995458859 919.228155361652
s 7.432702158224287 -8.725346011828512 16.158048170052798 -8.725346011828512
S 894.4391958859915 888.8510248019527 894.4391958859915 919.228155361652
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.007430888621878305s" dur="14.015795709357928s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path36"></mpath>
              </animateMotion>
            </use><path id="path37" d="M 930.6557291194999 264.14246027647323
c 0 62.18960417374632 -15.216605276554949 17.862971411607987 -33.07957668816294 17.862971411607987
S 864.4965757431742 326.33206445021955 864.4965757431742 264.14246027647323
s 15.216605276554949 -17.862971411607987 33.07957668816294 -17.862971411607987
S 930.6557291194999 201.9528561027269 930.6557291194999 264.14246027647323
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.5130071001899661s" dur="9.186677617879605s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path37"></mpath>
              </animateMotion>
            </use><path id="path38" d="M 949.3222214599564 936.3988984482421
c 0 57.57019145737432 -14.08632344169797 16.536118822862836 -30.622442264560807 16.536118822862836
S 888.0773369308347 993.9690899056164 888.0773369308347 936.3988984482421
s 14.08632344169797 -16.536118822862836 30.622442264560807 -16.536118822862836
S 949.3222214599564 878.8287069908678 949.3222214599564 936.3988984482421
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-1.4982122781837837s" dur="10.33859860628872s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path38"></mpath>
              </animateMotion>
            </use><path id="path39" d="M 993.7670922526178 771.7583626457155
c 0 65.70300292545593 -16.076266673249854 18.872139138162876 -34.948405811412734 18.872139138162876
S 923.8702806297923 837.4613655711714 923.8702806297923 771.7583626457155
s 16.076266673249854 -18.872139138162876 34.948405811412734 -18.872139138162876
S 993.7670922526178 706.0553597202595 993.7670922526178 771.7583626457155
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.452542263346301s" dur="14.8044852647436s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path39"></mpath>
              </animateMotion>
            </use><path id="path40" d="M 1006.9647698585999 1030.9135428412872
c 0 34.73085713417205 -8.4979756817655 9.975884495985587 -18.473860177751085 9.975884495985587
S 970.0170495030976 1065.6443999754592 970.0170495030976 1030.9135428412872
s 8.4979756817655 -9.975884495985587 18.473860177751085 -9.975884495985587
S 1006.9647698585999 996.1826857071151 1006.9647698585999 1030.9135428412872
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.38841045700301396s" dur="9.149109640868994s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path40"></mpath>
              </animateMotion>
            </use><path id="path41" d="M 1024.7315965021255 1170.0707974437432
c 0 57.40288785666291 -14.045387454289857 16.488063533296792 -30.53345098758665 16.488063533296792
S 963.6646945269522 1227.473685300406 963.6646945269522 1170.0707974437432
s 14.045387454289857 -16.488063533296792 30.53345098758665 -16.488063533296792
S 1024.7315965021255 1112.6679095870804 1024.7315965021255 1170.0707974437432
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.469742713726448s" dur="15.731916419586192s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path41"></mpath>
              </animateMotion>
            </use><path id="path42" d="M 1040.964753259812 912.265029134652
c 0 45.65781700309242 -11.17159352203325 13.11447935195208 -24.28607287398533 13.11447935195208
S 992.3926075118413 957.9228461377444 992.3926075118413 912.265029134652
s 11.17159352203325 -13.11447935195208 24.28607287398533 -13.11447935195208
S 1040.964753259812 866.6072121315595 1040.964753259812 912.265029134652
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.654543345877489s" dur="9.301861736279374s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path42"></mpath>
              </animateMotion>
            </use><path id="path43" d="M 1077.944117554223 1084.0989448173843
c 0 45.37392053512147 -11.102129492636104 13.032934621790211 -24.135064114426314 13.032934621790211
S 1029.6739893253705 1129.4728653525058 1029.6739893253705 1084.0989448173843
s 11.102129492636104 -13.032934621790211 24.135064114426314 -13.032934621790211
S 1077.944117554223 1038.725024282263 1077.944117554223 1084.0989448173843
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.9737496673375828s" dur="12.62438770812065s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path43"></mpath>
              </animateMotion>
            </use><path id="path44" d="M 1099.7633114826656 274.46750028284066
c 0 52.293578414514 -12.795237271636404 15.020495927573172 -27.815733199209575 15.020495927573172
S 1044.1318450842466 326.76107869735466 1044.1318450842466 274.46750028284066
s 12.795237271636404 -15.020495927573172 27.815733199209575 -15.020495927573172
S 1099.7633114826656 222.17392186832666 1099.7633114826656 274.46750028284066
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-1.2323511480584053s" dur="10.327820164993218s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path44"></mpath>
              </animateMotion>
            </use><path id="path45" d="M 1128.3387036622844 437.4342384147155
c 0 50.04813482647575 -12.245820223499384 14.375528088455802 -26.621348311955188 14.375528088455802
S 1075.096007038374 487.4823732411912 1075.096007038374 437.4342384147155
s 12.245820223499384 -14.375528088455802 26.621348311955188 -14.375528088455802
S 1128.3387036622844 387.38610358823973 1128.3387036622844 437.4342384147155
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-0.7563161540702932s" dur="14.206092148165828s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path45"></mpath>
              </animateMotion>
            </use><path id="path46" d="M 1139.5290367253506 779.6671833995808
c 0 22.745584124740958 -5.565408881585554 6.533306078383042 -12.098714959968595 6.533306078383042
S 1115.3316068054132 802.4127675243218 1115.3316068054132 779.6671833995808
s 5.565408881585554 -6.533306078383042 12.098714959968595 -6.533306078383042
S 1139.5290367253506 756.9215992748399 1139.5290367253506 779.6671833995808
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.37492882736354877s" dur="12.657836495704794s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path46"></mpath>
              </animateMotion>
            </use><path id="path47" d="M 1152.6707028534959 1052.521034194875
c 0 23.633287135705988 -5.7826128098004 6.788284602809167 -12.570897412609568 6.788284602809167
S 1127.5289080282766 1076.154321330581 1127.5289080282766 1052.521034194875
s 5.7826128098004 -6.788284602809167 12.570897412609568 -6.788284602809167
S 1152.6707028534959 1028.887747059169 1152.6707028534959 1052.521034194875
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.0486749732092933s" dur="13.258390510469095s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path47"></mpath>
              </animateMotion>
            </use><path id="path48" d="M 1171.6803166711284 989.0616195463208
c 0 30.502200482276685 -7.463304373323018 8.76127035129224 -16.22457472461526 8.76127035129224
S 1139.231167221898 1019.5638200285974 1139.231167221898 989.0616195463208
s 7.463304373323018 -8.76127035129224 16.22457472461526 -8.76127035129224
S 1171.6803166711284 958.5594190640442 1171.6803166711284 989.0616195463208
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.1676616246512195s" dur="8.62842159557285s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path48"></mpath>
              </animateMotion>
            </use><path id="path49" d="M 1214.3900427565632 1032.3469828000932
c 0 35.978127794098405 -8.803158928343226 10.334143089794223 -19.13730201813745 10.334143089794223
S 1176.1154387202882 1068.3251105941915 1176.1154387202882 1032.3469828000932
s 8.803158928343226 -10.334143089794223 19.13730201813745 -10.334143089794223
S 1214.3900427565632 996.3688550059948 1214.3900427565632 1032.3469828000932
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-1.6119272537582257s" dur="13.845672865335322s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path49"></mpath>
              </animateMotion>
            </use><path id="path50" d="M 1235.970356022829 307.72940998268217
c 0 19.348408639332497 -4.734185092602632 5.557521630446569 -10.2917067230492 5.557521630446569
S 1215.3869425767307 327.07781862201466 1215.3869425767307 307.72940998268217
s 4.734185092602632 -5.557521630446569 10.2917067230492 -5.557521630446569
S 1235.970356022829 288.3810013433497 1235.970356022829 307.72940998268217
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-0.14496463021169728s" dur="14.491819387981494s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path50"></mpath>
              </animateMotion>
            </use><path id="path51" d="M 1266.7477349534115 634.2910738332077
c 0 42.555020333655875 -10.4123985922775 12.223250521369241 -22.635649113646743 12.223250521369241
S 1221.4764367261182 676.8460941668636 1221.4764367261182 634.2910738332077
s 10.4123985922775 -12.223250521369241 22.635649113646743 -12.223250521369241
S 1266.7477349534115 591.7360534995519 1266.7477349534115 634.2910738332077
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.4688330224076203s" dur="14.980901307169288s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path51"></mpath>
              </animateMotion>
            </use><path id="path52" d="M 1264.9273638077138 835.7703992485233
c 0 29.66651438566681 -7.258827987982305 8.52123285545749 -15.780060843439793 8.52123285545749
S 1233.3672421208344 865.4369136341901 1233.3672421208344 835.7703992485233
s 7.258827987982305 -8.52123285545749 15.780060843439793 -8.52123285545749
S 1264.9273638077138 806.1038848628565 1264.9273638077138 835.7703992485233
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-1.39869262955504s" dur="15.825804728689238s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path52"></mpath>
              </animateMotion>
            </use><path id="path53" d="M 1309.6228330568374 1252.241326211835
c 0 64.35836260407584 -15.74725893503983 18.485912662872845 -34.23317159791268 18.485912662872845
S 1241.1564898610122 1316.599688815911 1241.1564898610122 1252.241326211835
s 15.74725893503983 -18.485912662872845 34.23317159791268 -18.485912662872845
S 1309.6228330568374 1187.8829636077592 1309.6228330568374 1252.241326211835
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.3107362865780154s" dur="12.881966571480383s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path53"></mpath>
              </animateMotion>
            </use><path id="path54" d="M 1321.3467269046164 362.02732470377634
c 0 28.882794665434233 -7.06706677984029 8.29612187198643 -15.363188651826718 8.29612187198643
S 1290.620349600963 390.9101193692106 1290.620349600963 362.02732470377634
s 7.06706677984029 -8.29612187198643 15.363188651826718 -8.29612187198643
S 1321.3467269046164 333.1445300383421 1321.3467269046164 362.02732470377634
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.08720501806962365s" dur="16.407392635902074s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path54"></mpath>
              </animateMotion>
            </use><path id="path55" d="M 1334.368648755036 580.693939947612
c 0 23.63134735440591 -5.78213818246102 6.787727431584677 -12.569865614045696 6.787727431584677
S 1309.2289175269445 604.3252873020178 1309.2289175269445 580.693939947612
s 5.78213818246102 -6.787727431584677 12.569865614045696 -6.787727431584677
S 1334.368648755036 557.0625925932061 1334.368648755036 580.693939947612
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-3.201853456120625s" dur="9.755156614978803s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path55"></mpath>
              </animateMotion>
            </use><path id="path56" d="M 1380.7136352861112 912.3086174880083
c 0 63.273339612313876 -15.48177458599169 18.1742571226859 -33.65603170867759 18.1742571226859
S 1313.401571868756 975.5819571003221 1313.401571868756 912.3086174880083
s 15.48177458599169 -18.1742571226859 33.65603170867759 -18.1742571226859
S 1380.7136352861112 849.0352778756944 1380.7136352861112 912.3086174880083
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.7339931714494251s" dur="14.248947023778374s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path56"></mpath>
              </animateMotion>
            </use><path id="path57" d="M 1411.5694822282483 247.2810333790558
c 0 53.385000343809764 -13.062287318166218 15.333989460455998 -28.396276778622216 15.333989460455998
S 1354.7769286710038 300.66603372286556 1354.7769286710038 247.2810333790558
s 13.062287318166218 -15.333989460455998 28.396276778622216 -15.333989460455998
S 1411.5694822282483 193.89603303524603 1411.5694822282483 247.2810333790558
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-0.0037996063850865213s" dur="14.892266633578917s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path57"></mpath>
              </animateMotion>
            </use><path id="path58" d="M 1427.3855326644943 603.1903768460537
c 0 51.43472632172295 -12.585092610634337 14.773804369005527 -27.358896979639866 14.773804369005527
S 1372.6677387052146 654.6251031677766 1372.6677387052146 603.1903768460537
s 12.585092610634337 -14.773804369005527 27.358896979639866 -14.773804369005527
S 1427.3855326644943 551.7556505243308 1427.3855326644943 603.1903768460537
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-1.2656103478063172s" dur="9.234804064831096s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path58"></mpath>
              </animateMotion>
            </use><path id="path59" d="M 1443.9438223826066 888.4318702049976
c 0 44.30925266115261 -10.841625651133084 12.727125764373623 -23.568751415506707 12.727125764373623
S 1396.806319551593 932.7411228661502 1396.806319551593 888.4318702049976
s 10.841625651133084 -12.727125764373623 23.568751415506707 -12.727125764373623
S 1443.9438223826066 844.122617543845 1443.9438223826066 888.4318702049976
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-3.402639029155551s" dur="9.644477694453496s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path59"></mpath>
              </animateMotion>
            </use><path id="path60" d="M 1482.3157522362126 520.6523799460122
c 0 61.98082493460842 -15.165520994638229 17.803002906749228 -32.96852390138746 17.803002906749228
S 1416.3787044334376 582.6332048806206 1416.3787044334376 520.6523799460122
s 15.165520994638229 -17.803002906749228 32.96852390138746 -17.803002906749228
S 1482.3157522362126 458.6715550114037 1482.3157522362126 520.6523799460122
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-0.6405960489315208s" dur="11.745958200573915s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path60"></mpath>
              </animateMotion>
            </use><path id="path61" d="M 1481.3412644661953 1252.767353487056
c 0 21.335870494691374 -5.220478950828739 6.128388333581565 -11.348867284410304 6.128388333581565
S 1458.6435298973747 1274.1032239817473 1458.6435298973747 1252.767353487056
s 5.220478950828739 -6.128388333581565 11.348867284410304 -6.128388333581565
S 1481.3412644661953 1231.4314829923646 1481.3412644661953 1252.767353487056
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.6536309234135453s" dur="11.25519456894771s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path61"></mpath>
              </animateMotion>
            </use><path id="path62" d="M 1535.199193869958 571.3009596043518
c 0 62.813569070930235 -15.369277538631865 18.04219537143741 -33.41147291006927 18.04219537143741
S 1468.3762480498194 634.114528675282 1468.3762480498194 571.3009596043518
s 15.369277538631865 -18.04219537143741 33.41147291006927 -18.04219537143741
S 1535.199193869958 508.48739053342155 1535.199193869958 571.3009596043518
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-0.92249993096423s" dur="10.803493819336373s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path62"></mpath>
              </animateMotion>
            </use><path id="path63" d="M 1529.111910173063 788.481756939784
c 0 39.70901517147038 -9.716035627061899 11.405780953507449 -21.121816580569348 11.405780953507449
S 1486.8682770119242 828.1907721112543 1486.8682770119242 788.481756939784
s 9.716035627061899 -11.405780953507449 21.121816580569348 -11.405780953507449
S 1529.111910173063 748.7727417683136 1529.111910173063 788.481756939784
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-2.2053460179650886s" dur="15.764488285064798s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path63"></mpath>
              </animateMotion>
            </use><path id="path64" d="M 1575.0408169577006 712.4797546288243
c 0 60.88146094997345 -14.896527679248821 17.48722814520514 -32.383755824453964 17.48722814520514
S 1510.2733053087925 773.3612155787977 1510.2733053087925 712.4797546288243
s 14.896527679248821 -17.48722814520514 32.383755824453964 -17.48722814520514
S 1575.0408169577006 651.5982936788508 1575.0408169577006 712.4797546288243
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.6223739384588319s" dur="10.574583958712552s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path64"></mpath>
              </animateMotion>
            </use><path id="path65" d="M 1591.4558390686316 713.0445535501049
c 0 44.55152738673675 -10.900905637180268 12.79671531321162 -23.697620950391887 12.79671531321162
S 1544.0605971678478 757.5960809368416 1544.0605971678478 713.0445535501049
s 10.900905637180268 -12.79671531321162 23.697620950391887 -12.79671531321162
S 1591.4558390686316 668.4930261633681 1591.4558390686316 713.0445535501049
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-4.028024054157136s" dur="16.794048743300607s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path65"></mpath>
              </animateMotion>
            </use><path id="path66" d="M 1626.6932853894043 327.67556338887334
c 0 59.30959621765282 -14.511922478787389 17.035735083793895 -31.547657562581286 17.035735083793895
S 1563.597970264242 386.98515960652617 1563.597970264242 327.67556338887334
s 14.511922478787389 -17.035735083793895 31.547657562581286 -17.035735083793895
S 1626.6932853894043 268.3659671712205 1626.6932853894043 327.67556338887334
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.5179096067222826s" dur="8.921512849940076s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path66"></mpath>
              </animateMotion>
            </use><path id="path67" d="M 1649.2406976912464 160.50388644533638
c 0 60.24883721653922 -14.741736765748957 17.305517072835734 -32.047253838584695 17.305517072835734
S 1585.1461900140769 220.7527236618756 1585.1461900140769 160.50388644533638
s 14.741736765748957 -17.305517072835734 32.047253838584695 -17.305517072835734
S 1649.2406976912464 100.25504922879716 1649.2406976912464 160.50388644533638
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.2543417252280107s" dur="11.625034416036298s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path67"></mpath>
              </animateMotion>
            </use><path id="path68" d="M 1654.765223161728 237.36977871976103
c 0 43.98117570354655 -10.761351501931602 12.632890893571881 -23.394242395503483 12.632890893571881
S 1607.9767383707213 281.3509544233076 1607.9767383707213 237.36977871976103
s 10.761351501931602 -12.632890893571881 23.394242395503483 -12.632890893571881
S 1654.765223161728 193.3886030162145 1654.765223161728 237.36977871976103
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.4011524268187228s" dur="13.148981293388873s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path68"></mpath>
              </animateMotion>
            </use><path id="path69" d="M 1708.1391896285218 206.34726232340714
c 0 64.59772822931934 -15.805827119939837 18.554666619059812 -34.36049373899965 18.554666619059812
S 1639.4182021505226 270.9449905527265 1639.4182021505226 206.34726232340714
s 15.805827119939837 -18.554666619059812 34.36049373899965 -18.554666619059812
S 1708.1391896285218 141.74953409408778 1708.1391896285218 206.34726232340714
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.8507189973305533s" dur="11.365143802112405s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path69"></mpath>
              </animateMotion>
            </use><path id="path70" d="M 1700.7489866982132 464.4651107723672
c 0 32.172363073957996 -7.871961177670573 9.24099790422198 -17.11295908189255 9.24099790422198
S 1666.5230685344281 496.6374738463252 1666.5230685344281 464.4651107723672
s 7.871961177670573 -9.24099790422198 17.11295908189255 -9.24099790422198
S 1700.7489866982132 432.29274769840924 1700.7489866982132 464.4651107723672
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-3.738765597359464s" dur="15.866138156935838s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path70"></mpath>
              </animateMotion>
            </use><path id="path71" d="M 1730.1010115169697 241.4283375950535
c 0 25.24809797193679 -6.177726099516448 7.25211324725844 -13.429839346774887 7.25211324725844
S 1703.2413328234197 266.6764355669903 1703.2413328234197 241.4283375950535
s 6.177726099516448 -7.25211324725844 13.429839346774887 -7.25211324725844
S 1730.1010115169697 216.1802396231167 1730.1010115169697 241.4283375950535
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-1.7664002015519993s" dur="9.40846490301118s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path71"></mpath>
              </animateMotion>
            </use><path id="path72" d="M 1740.024872349382 337.49890772200393
c 0 48.7783526021539 -11.935128828186592 14.010803407001653 -25.945932235188245 14.010803407001653
S 1688.1330078790056 386.27726032415785 1688.1330078790056 337.49890772200393
s 11.935128828186592 -14.010803407001653 25.945932235188245 -14.010803407001653
S 1740.024872349382 288.72055511985 1740.024872349382 337.49890772200393
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-1.202130395867123s" dur="10.2885670801397s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path72"></mpath>
              </animateMotion>
            </use><path id="path73" d="M 1788.4928871637926 1148.1825073091463
c 0 42.153084704139154 -10.314052640374472 12.10780092565699 -22.421853566031462 12.10780092565699
S 1743.6491800317299 1190.3355920132856 1743.6491800317299 1148.1825073091463
s 10.314052640374472 -12.10780092565699 22.421853566031462 -12.10780092565699
S 1788.4928871637926 1106.029422605007 1788.4928871637926 1148.1825073091463
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-3" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.9351038062173043s" dur="9.309449530057377s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path73"></mpath>
              </animateMotion>
            </use><path id="path74" d="M 1797.9212909742753 636.8585902073384
c 0 30.784103475221972 -7.532280637554312 8.842242487563759 -16.37452312511807 8.842242487563759
S 1765.1722447240393 667.6426936825603 1765.1722447240393 636.8585902073384
s 7.532280637554312 -8.842242487563759 16.37452312511807 -8.842242487563759
S 1797.9212909742753 606.0744867321164 1797.9212909742753 636.8585902073384
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-4.110249975333953s" dur="15.499252493079439s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path74"></mpath>
              </animateMotion>
            </use><path id="path75" d="M 1811.6136470695071 947.4162148209158
c 0 29.432496345563422 -7.201568254765517 8.454014907768217 -15.655583162533734 8.454014907768217
S 1780.3024807444397 976.8487111664792 1780.3024807444397 947.4162148209158
s 7.201568254765517 -8.454014907768217 15.655583162533734 -8.454014907768217
S 1811.6136470695071 917.9837184753524 1811.6136470695071 947.4162148209158
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-0.06273685689984362s" dur="16.71397599254342s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path75"></mpath>
              </animateMotion>
            </use><path id="path76" d="M 1848.0199740780795 744.4241131126893
c 0 64.467004658139 -15.77384156528933 18.51711835925269 -34.29095992454202 18.51711835925269
S 1779.4380542289955 808.8911177708283 1779.4380542289955 744.4241131126893
s 15.77384156528933 -18.51711835925269 34.29095992454202 -18.51711835925269
S 1848.0199740780795 679.9571084545503 1848.0199740780795 744.4241131126893
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#9dceff">
              <animateMotion begin="-0.6610302595623265s" dur="12.42199421462321s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path76"></mpath>
              </animateMotion>
            </use><path id="path77" d="M 1858.5334475459 529.6292582362424
c 0 24.066372726038082 -5.888580560626338 6.91268152769179 -12.80126208831813 6.91268152769179
S 1832.9309233692638 553.6956309622806 1832.9309233692638 529.6292582362424
s 5.888580560626338 -6.91268152769179 12.80126208831813 -6.91268152769179
S 1858.5334475459 505.56288551020435 1858.5334475459 529.6292582362424
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-2.1124267561202243s" dur="17.099193636053915s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path77"></mpath>
              </animateMotion>
            </use><path id="path78" d="M 1896.5080691083879 959.7333218554732
c 0 55.51562801113248 -13.583611109106881 15.945978258516776 -29.529589367623657 15.945978258516776
S 1837.4488903731406 1015.2489498666056 1837.4488903731406 959.7333218554732
s 13.583611109106881 -15.945978258516776 29.529589367623657 -15.945978258516776
S 1896.5080691083879 904.2176938443407 1896.5080691083879 959.7333218554732
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-1" x="0" y="0" stroke="#96a7b8">
              <animateMotion begin="-3.5759524779934084s" dur="11.725150118200398s" keyPoints="1;0" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path78"></mpath>
              </animateMotion>
            </use><path id="path79" d="M 1927.2011053685449 986.0091603074793
c 0 50.58692258598191 -12.377651271038125 14.530286274696932 -26.907937545735056 14.530286274696932
S 1873.385230277075 1036.5960828934612 1873.385230277075 986.0091603074793
s 12.377651271038125 -14.530286274696932 26.907937545735056 -14.530286274696932
S 1927.2011053685449 935.4222377214974 1927.2011053685449 986.0091603074793
z" fill="none" stroke="none"></path>
            <use xlinkHref="#path-d8k7avqz61f-2" x="0" y="0" stroke="#ffffff">
              <animateMotion begin="-2.272339825778287s" dur="16.333908615156997s" keyPoints="0;1" keyTimes="0;1" repeatCount="indefinite" calcMode="linear">
                <mpath xlinkHref="#path79"></mpath>
              </animateMotion>
            </use></g>
        </svg>
      )
    }
  </div>
  </>
);

export default BackgroundAnimation;