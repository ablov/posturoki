const test = [];
const key = [];
let variant = 7;

test[0] = "Раст_лковать смысл, обн_жить плечи, объед_нять людей, усм_рить скакуна, прим_рять противников, прим_рять пальто, насл_ждаться теплом, подсл_стить пилюлю, просл_влять в песне, благосл_влять на подвиг, прор_дить всходы, снар_дить в поход, зар_дить ружье, разв_ваться на ветру, действие разв_вается, ув_вать гирляндами, в_сеть под потолком, уг_сать с годами, жадно погл_щать, всех оч_ровать, система просв_щения, посв_щение в студенты, просв_щённый св_щенник, осв_щённый обычаями, сост_влять столы, сост_ять в команде, г_л_сить не перест_вая, г_л_совать против всех, пригл_шать гостей, милостиво согл_ситься, пров_лочное загр_ждение, угр_жать неприятностями, прегр_дить дорогу, нагр_ждать орденами, укор_тить веревку.";
key[0]  = "Растолковать смысл, обнажить плечи, объединять людей, усмирить скакуна, примирять противников, примерять пальто, наслаждаться теплом, подсластить пилюлю, прославлять в песне, благословлять на подвиг, проредить всходы, снарядить в поход, зарядить ружье, развеваться на ветру, действие развивается, увивать гирляндами, висеть под потолком, угасать с годами, жадно поглощать, всех очаровать, система просвещения, посвящение в студенты, просвещённый священник, освещённый обычаями, составлять столы, состоять в команде, голосить не переставая, голосовать против всех, приглашать гостей, милостиво согласиться, проволочное заграждение, угрожать неприятностями, преградить дорогу, награждать орденами, укоротить веревку.";

test[1] = "Далее царь отпустил Пушкина жестом и тот выск_чил из кабинета " +
    "и легко прол_тел по паркетам смежного зала чуть к_внувши Дантесу дежурному офицеру.\n" +
    "«Он чуть с ума (н_)св_ротил или (н_)сделался поэтом, пр_знаться, то-то б од_лжил!» - озабочен_о подумал о своем ученике" +
    " Чижиков и взгл_нул на часы. Чтение повеет_ заняло (н_)больше (полу)часа. Интересно сколько времен_ посв_тил работе сам автор?\n" +
    "(Н_)исключен_о что (н_)одну ночь. А может (н_)один урок физик_ или математик_. Да и как подсч_таеш_ сколько времен_ работает автор" +
    " над своим произведением отразивш_м может быть настроение целого пок_ления? Кто знает может речь идет о буду_щем гени_" +
    " который взял и позволил себе для спрес_овки сюжета (н_)большие сдвиги " +
    "во времени - лет на сто или на двести? Ведь нельзя же утверждать что рас_казан_ая история полностью выдуман_а. " +
    "Может Федюшкин - писатель буду_щего? Ведь его современ_ики читатели трет_его тысяч_летия живущие в обществе (н_)хранящ_м " +
    "традиции откроют повесть с тем(же) отреш_н_ым вниманием, с каким мы рас_матриваем евангельские сюжеты мастеров Возр_ждения.";
key[1]  = "Далее царь отпустил Пушкина жестом, и тот выскочил из кабинета " +
    "и легко пролетел по паркетам смежного зала, чуть кивнувши Дантесу, дежурному офицеру.\n" +
    "«Он чуть с ума не своротил или не сделался поэтом, признаться, то-то б одолжил!» - озабоченно подумал о своем ученике " +
    "Чижиков и взглянул на часы. Чтение повести заняло не больше получаса. Интересно, сколько времени посвятил работе сам автор?\n" +
    "Не исключено, что не одну ночь. А может, не один урок физики или математики. Да и как подсчитаешь, сколько времени работает автор " +
    "над своим произведением, отразившим, может быть, настроение целого поколения? Кто знает, может, речь идет о будущем гении, " +
    "который взял и позволил себе для спрессовки сюжета небольшие сдвиги " +
    "во времени - лет на сто или на двести? Ведь нельзя же утверждать, что рассказанная история полностью выдумана. " +
    "Может, Федюшкин - писатель будущего? Ведь его современники, читатели третьего тысячелетия, живущие в обществе, не хранящем " +
    "традиции, откроют повесть с тем же отрешенным вниманием, с каким мы рассматриваем евангельские сюжеты мастеров Возрождения.";

test[2] = "Погл_щённый _делкой; бе_корыс_ный инт_л_игент; по_скользнуться, _бегая по лес_нице; _дешнее тураген_ство; чере_чур обн_жённый; ра_познать по_черк просв_щённого св_щенника; бе_вкусное соч_тание; прик_снуться к заг_релой руке сверс_ницы; не ра_считал время и оп_здал; _горяча _делал бе_смысленные ра_чёты; во_становленное _дание; на_смехаться над окрес_ными ст_рожилами; ра_чистить п_л_садник; блес_нули бе_счётные звёзды; обм_кнуть бе_численное количество раз; подр_жать бе_церемонному ровес_нику; ра_стилается бе_крайняя р_внина; ра_стегнуть непром_каемый плащ.";
key[2]  = "Поглощённый сделкой; бескорыстный интеллигент; поскользнуться, сбегая по лестнице; здешнее турагентство; чересчур обнажённый; распознать почерк просвещённого священника; безвкусное сочетание; прикоснуться к загорелой руке сверстницы; не рассчитал время и опоздал; сгоряча сделал бессмысленные расчёты; восстановленное здание; насмехаться над окрестными старожилами; расчистить палисадник; блеснули бессчётные звёзды; обмакнуть бесчисленное количество раз; подражать бесцеремонному ровеснику; расстилается бескрайняя равнина; расстегнуть непромокаемый плащ.";

test[3] = "Редкос_ный р_сток, чу_ствовать насл_ждение, прим_рять шес_надцатилетних сверс_ников, в к_мпании ровес_ников, разг_релся ярос_ный спор, завис_ливая невес_ка, погл_щать я_тва, расст_лающийся окрес_ный лан_шафт, компр_ме_тировать себя причас_ностью к нечес_ной сделке, иску_ство словес_ника, предст_влять мес_ных ст_рожилов, учас_вовать в президен_ской предвыборной к_мпании, блес_нуть отр_женным светом, извес_ное соч_тание, ут_ить от наперс_ницы, праз_ничное ше_ствие пор_внялось с трибуной, ше_ствовать над нач_нающим спор_меном, раздр_жает мерзопакос_ное предчу_ствие, объез_чик заметил дог_рающий костер, взять под уз_цы усм_рённую лошадь, широкома_штабная п_н_рама, полновлас_ный обл_датель, сл_пающиеся рес_ницы, угр_жать оп_здавшему студенту отч_слением, древес_ная кора оз_рена со_нцем, доблес_но охр_нять аген_ство, безвозмез_ная помощ_, чу_ствительный удар по к_рману, док_зательство своей непричас_ности, разв_вающаяся отр_сль, ярос_но обл_чать ненавис_ных соперников, посв_щать в гнус_ные планы, ум_лять заслуги мес_ных властей.";
key[3]  = "Редкостный росток, чувствовать наслаждение, примирять шестнадцатилетних сверстников, в компании ровесников, разгорелся яростный спор, завистливая невестка, поглощать яства, расстилающийся окрестный ландшафт, компрометировать себя причастностью к нечестной сделке, искусство словесника, представлять местных старожилов, участвовать в президентской предвыборной кампании, блеснуть отражённым светом, известное сочетание, утаить от наперсницы, праздничное шествие поравнялось с трибуной, шефствовать над начинающим спортcменом, раздражает мерзопакостное предчувствие, объездчик заметил догорающий костер, взять под уздцы усмирённую лошадь, широкомасштабная панорама, полновластный обладатель, слипающиеся ресницы, угрожать опоздавшему студенту отчислением, древесная кора озарена солнцем, доблестно охранять агентство, безвозмездная помощь, чувствительный удар по карману, доказательство своей непричастности, развивающаяся отрасль, яростно обличать ненавистных соперников, посвящать в гнусные планы, умалять заслуги местных властей.";

test[4] = "Когда же защ_щать Ксению Аркадьевну было не(от)кого Соломон Маркович устра_вал ей (не)большие представления. Любимой его инсц_н_ровкой была охота. Он бе_жалос_но _бивал в кучу вязан_ый (жёлто)рыжий пушистый плед и делал себе из него страшилку. Очевидно кот имел (в)виду что это раз_ярён_ый лев или может тигр хищ_ный злой голодный. Ра_свир_пев (н_)на шутку Соломон ярос_но ср_жался с вообр_жаемым противн_ком пока (н)од_левал его и тот повержен_ый (н_)оказывался на лак_рован_ом п_ркете у ног Ксени_ Аркадьевны. Её пр_сутствие было обязательным. Зритель пусть и единствен_ый - (н_)пр_мен_ое условие для вд_хновен_ой игры. Кому интересно играть (в)од_ночку? Ксения Аркадьевна к таким играм относилась с пон_манием изодран_ый когтями плед прощала, а способности кота к игре сч_тала про_влением бл_стящего инт_л_екта. Верность и предан_ость Соломона Марковича она ценила бе_мерно и после каждой такой охоты кормила сырой печ_нкой.\n" +
    "Чижиков об_жал всё кругом, но Соломона Марковича (н_)нашёл и окончательно раздр_ж_н_ый бе_плодными поисками позв_нил Ксени_ Аркадьевне что(бы) сказать что рас_тра_ваться ещё рано и (не)зачем. Однако Ксения Аркадьевна отвечала срывающ_мся от волнения голосом в котором уже др_жали слёзы. Она слушала Чижикова явно (в)(пол)уха и даже в трубку было слышно как об_жаемая Соломоном Марковичем хозяйка от_итывает положен_ое количество капель валерьянк_.";
key[4] = "Когда же защищать Ксению Аркадьевну было не от кого, Соломон Маркович устраивал ей небольшие представления. Любимой его инсценировкой была охота. Он безжалостно сбивал в кучу вязаный жёлто рыжий пушистый плед и делал себе из него страшилку. Очевидно, кот имел в виду, что это разъярённый лев или, может, тигр(,) - хищный, злой, голодный. Рассвирепев не на шутку, Соломон яростно сражался с воображаемым противником, пока не одолевал его и тот, поверженный, не оказывался на лакированном паркете у ног Ксении Аркадьевны. Её присутствие было обязательным. Зритель, пусть и единственный, - непременное условие для вдохновенной игры. Кому интересно играть в одиночку? Ксения Аркадьевна к таким играм относилась с пониманием, изодранный когтями плед прощала, а способности кота к игре считала проявлением блестящего интеллекта. Верность и преданность Соломона Марковича она ценила безмерно и после каждой такой охоты кормила сырой печёнкой.\n" +
    "Чижиков обежал всё кругом, но Соломона Марковича не нашёл и, окончательно раздражённый бесплодными поисками, позвонил Ксении Аркадьевне, чтобы сказать, что расстраиваться ещё рано и незачем. Однако Ксения Аркадьевна отвечала срывающимся от волнения голосом, в котором уже дрожали слёзы. Она слушала Чижикова явно вполуха, и даже в трубку было слышно, как обожаемая Соломоном Марковичем хозяйка отсчитывает положенное количество капель валерьянки.";

test[5] = "(В)низу на детской площадк_ собралась толпа. К месту прои_шествия бе_конечной ц_почкой т_нулись пр_клон_ого возр_ста пенс_онеры ст_рожилы окрес_ных дворов. (Не)которые были со стульями. Громко ла_щие собаки (во)всю озвуч_вали происходящ_е. Жильцы (по)моложе ярос_но спорили кто упадёт первым. Самые активные раст_нули под деревом одеяло и задрав головы хором уг_варивали Соломона Марковича и Федюшкина падать либо (в)двоём либо (по)одиночке.\n" +
    "Советч_ки бегали под деревом бе_толково суетясь а главное (н_)ост_навливаясь (н_)на минуту. Было оч_видно что прыгать с дерева ещё опас_нее чем в_сеть на нём. К тому(же) чу_ство гордости в равной степен_ пр_сущее обоим находивш_мся на дереве мучен_икам (н_)позв_ляло им откликнут_ся на призывы о спасени_ с помощью какого(то) стёган_ого клоч_чка матери_.\n" +
    "(Не)ждан_ая помощь пришла со стороны балкона Черничкиных. (Не)возмутимая Черничкина-старшая (в)миг оц_нив обст_новку вынесла на б_лкон д_бротную швабру. Она надёжно пол_жила её одним концом на пери_ла б_лкона, а другим попыталась дот_нуться до той ветк_ где из последних сил держался Соломон Маркович. Уже (н_)рас_читывающий (н_) на что хорошее он как зач_рован_ый напр_жён_о наблюдал за её действиями. С (не)меньш_м интересом следили за разв_вающ_мися событиями (на)время пр_м_рившиеся об_татели двора. Швабра наконец дот_нулась до ветк_ и кот судьбу бл_госл_вив благ_дарно вц_пился в густую щ_тину. Сцена сопров_ждалась ап_лод_сментами. Но только Соломон Маркович собрался повт_рить бл_стательный трюк гимнаста Тибула который проше_ствовал по канату над городской площадью как пр_словутая ветка (н_)выдержав тяжести стр_мительно накл_нилась и швабра лиш_н_ая второй опоры оп_сала дугу и рухнула щ_тиной (в)низ. " +
    "Соломон Маркович вц_пившись в щ_тку зак_чался на ней как на " +
    "качелях. Зрители заст_нали, а самые мелкие закрыли глаза ладошками и за дальнейш_м наблюдали сквозь щ_лочку между пальцами. " +
    "Но и сквозь щ_лочку было видно что решительная Черничкина-старшая (н_)на секунду (н_)ра_терявшись швабру держит (по)прежнему крепко и скоро втян_т кота на балкон. На под_ехавшую машину «Службы спасения» (н_)кто вн_мания (н_)обратил. Все наблюдали за спасением кота и дружно выд_хнули, когда Черничкина-старшая вт_нула швабру " +
    "с котом на б_лкон. Ок_завшись вне опас_ности Соломон Маркович и (н_)подумал уд_рать с места прои_шествия. Он прогуливался как " +
    "(н_)в чём (н_)бывало по балкону на глазах восхищён_ой публики. Мол, имейте (в)виду, подобные трюки увид_ш_ (н_)часто. Хождение котов по швабре на (не)дос_гаемой высоте -  далеко (не)лёгкое дело. Для тех кто понимает конечно. Однако заметив что Черничкина-старшая говорит что(то) (в)(пол)голоса Федюшкину он поспешно уд_лился.\n" +
    "«Послушай Федюшкин, - как(будто) (н_)замечая что скорч_вш_йся от напр_жения и (т_жело)дыш_щ_й Федюшкин до сих пор в_сит на уровне окон шестого этажа и к нему уже разв_рач_вается выо_чен_ая лес_ница с машины «Службы спасения». - Пойдём в кино сегодня?";
key[5] = "Внизу, на детской площадке, собралась толпа. К месту происшествия бесконечной цепочкой тянулись преклонного возраста пенсионеры, старожилы окрестных дворов. Некоторые были со стульями. Громко лающие собаки вовсю озвучивали происходящее. Жильцы помоложе яростно спорили, кто упадёт первым. Самые активные растянули под деревом одеяло и, задрав головы, хором уговаривали Соломона Марковича и Федюшкина падать либо вдвоём, либо поодиночке.\n" +
    "Советчики бегали под деревом, бестолково суетясь, а главное - " +
    "не останавливаясь ни на минуту. Было очевидно, что прыгать с дерева ещё опаснее, чем висеть на нём. К тому же чувство гордости, в равной степени присущее обоим находившимся на дереве мученикам, " +
    "не позволяло им откликнуться на призывы о спасении с помощью какого-то стёганого клочочка материи.\n" +
    "Нежданная помощь пришла со стороны балкона Черничкиных. Невозмутимая Черничкина-старшая, вмиг оценив обстановку, вынесла на балкон добротную швабру. Она надёжно положила её одним концом на перила балкона, а другим попыталась дотянуться до той ветки, где из последних сил держался Соломон Маркович. Уже не рассчитывающий ни на что хорошее, он как зачарованный напряжённо наблюдал за её действиями. С не меньшим интересом следили за развивающимися событиями на время примирившиеся обитатели двора. Швабра наконец дотянулась до ветки и кот, судьбу благословив, благодарно вцепился в густую щетину. Сцена сопровождалась аплодисментами. Но только Соломон Маркович собрался повторить блистательный трюк гимнаста Тибула, который прошествовал по канату над городской площадью, как пресловутая ветка, не выдержав тяжести, стремительно наклонилась, и швабра, лишённая второй опоры, описала дугу и рухнула щетиной вниз. Соломон Маркович, вцепившись в щётку, закачался на ней, как на качелях. Зрители застонали, а самые мелкие закрыли глаза ладошками и за дальнейшим наблюдали сквозь щёлочку между пальцами. Но и сквозь щёлочку было видно, что решительная Черничкина-старшая, ни на секунду не растерявшись, швабру держит по-прежнему крепко и скоро втянет кота на балкон. На подъехавшую машину «Службы спасения» никто внимания не обратил. Все наблюдали за спасением кота и дружно выдохнули, когда Черничкина-старшая втянула швабру с котом на балкон. Оказавшись вне опасности, Соломон Маркович и не подумал удирать с места происшествия. Он прогуливался как ни в чём не бывало по балкону на глазах восхищённой публики. Мол, имейте в виду, подобные трюки увидишь нечасто. Хождение котов по швабре на недосягаемой высоте - далеко не лёгкое дело. Для тех, кто понимает, конечно. Однако заметив, что Черничкина-старшая говорит что-то вполголоса Федюшкину, он поспешно удалился.\n" +
    "«Послушай, Федюшкин, - как будто не замечая, что скорчившийся от напряжения и тяжело дышащий Федюшкин до сих пор висит на уровне окон шестого этажа и к нему уже разворачивается высоченная лестница с машины «Службы спасения». - Пойдём в кино сегодня?";

test[6] = "Пут_ше_ствие на транс_европейском экспре_се; пор_вняться " +
    "с трёх_этажным _данием; бе_вкусный ув_дающий букет; без_ску_ный ра_сказ мес_ного св_щенника; из_ясняться беза_пе_ляционно; ск_кать г_лопом на необ_езженном коне; ра_ст_лается необ_ятная р_внина; неот_емл_мая часть жизни  ровес_ников;  прил_гать сверх_естественные усилия, чтобы не оп_здать; вз_мать дань " +
    "с необ_ятных окрес_ных владений; фотос_ёмка моего сверс_ника; суб_ективный взгляд на и_ку_ство пост_мпрессионистов; ше_ствовать рядом с бл_стящим ад_ютантом, во всём ему подр_жая; пред_явить номерок и получить белич_ю шубу; насл_ждаться птич_ими трелями; бл_стящая контр_игра; сверх_интересные комп_ютерные игры; с_езжать по пери_ам весело, но довольно опас_но; с_скное аген_ство.";
key[6] = "Путешествие на трансъевропейском экспрессе; поравняться с трёхэтажным зданием; безвкусный увядающий букет; безыскусный рассказ местного священника; изъясняться безапелляционно; скакать галопом на необъезженном коне; расстилается необъятная равнина; неотъемлемая часть жизни ровесников; прилагать сверхъестественные усилия, чтобы не опоздать; взимать дань с необъятных окрестных владений; фотосъёмка моего сверстника; субъективный взгляд на искусство постимпрессионистов; шествовать рядом с блестящим адъютантом, во всём ему подражая; предъявить номерок и получить беличью шубу; наслаждаться птичьими трелями; блестящая контригра; сверхинтересные компьютерные игры; съезжать по перилам весело, но довольно опасно; сыскное агентство.";

test[7] = "Черничкина-старшая тем временем успела ра_ставить на столе накрыт_м холщ_вой скатертью р_списа_ые син_ми цветочками тарелки и разл_жить столовые пр_боры. Ножи и вилки - (с)прав_ от тарелк_, ложки - (с)лев_. Когда она открыла крышку к_стрюльки обл_чко пара вырвалось (на)ружу и густой ар_мат пр_готовлен_ого супа поплыл по комн_те. «Всё(таки) хорошо готовить настоящее и_ку_ство», - подумала старшая сестра и ещё раз полюбовалась своим произведением. (Разно)цветные овощи сладкий болгарский перец жёлтый и (тёмно)красный (ярко)оранжевая морковка зелёный горош_к щедро пр_правлен_ые прян_ыми травами радовали глаз.\n" +
    "Интересно удаст_ся ли уг_ворить сестру с_есть тарелочку? Ведь она такая пр_вередл_вая! Черничкина-старшая посмотрела на сестру и увид_ла что та (по)прежнему лежит на д_ване устав_вшись в потолок. Зная как (не)просто пр_одолеть плохое настроение сестры Черничкина-старшая постаралась её отвлеч_.\n" +
    "- Будь добра, - пр_м_рительно сказала Черничкина-старшая, - нареж_ хлеб и намаж_ ломт_ки маслом!\n" +
    "Гл_тая слёзы младшая сестра ул_жила пр_готовлен_ые бут_рброды в плетён_ую из соломки хлебн_цу и пр_двинув к себе тарелку с супом воткнула веточку петрушки в ломт_к варён_ой морковки. Секунда и она уже гон_т красную лодочку от одного края тарелк_ до другого.\n" +
    "- Вот молодец,  (за)одно и суп остуд_ш_! - одобрила её старшая сестра.\n" +
    "Однако скоро лодка села на к_ртофельную мель. Черничкина-младшая подула ещё сильнее и шторм усилился и стал пятибал_ьным. Буль_н_ое море разбуш_валось (во)всю и пр_огромная волна док_тивш_сь до края тарелк_ выпл_снулась на скатерть. Черничкина-младшая пром_кнула лужу с_лфеткой и в_новато взгл_нула на сестру. «Ну, сейчас начнётся!» - подумала младшая сестра. «Это уже чере_чур! Нельзя же себе всё позволять! - скажет Черничкина-старшая маминым голосом. - Ты что - хочеш_, что(бы) все считали тебя избалован_ой? Ума (н_)прил_жу, что(бы) такое придумать, что(бы) ты стала поак_уратнее!»\n" +
    "Однако старшей сестре в данный момент было (н_) до неё: стоя перед зеркалом она увлечён_о прим_ряла (не)давно куплен_ые наряды. «Это они с Федюшкиным в кино соб_раются!» - догадалась Черничкина-младшая и стала зав_р_ж_н_о рас_матривать сестру, которая всегда была для неё (не)дос_гаемым ид_алом. (Во)первых отлично воспитан_а родителями: всегда сдержан_а, (н_)каких глупостей (н_)говорит, её слова обдуман_ы. (Во)вторых сестра прекрасно образован_а и знает всё на свете. А какая она сейчас красав_ца: воротнич_к клетч_той рубашки (не)брежно ра_стёгнут юбка словно колокол, но главное конечно кожан_ая сумочка с серябр_н_ым замоч_ком. Щ_лк - открылась, щ_лк - закрылась!\n" +
    "Черничкина-младшая быстро с_ела суп и решила что когда выр_ст_т буд_т одеват_ся так(же). Пока же она предпоч_тала джинсы и крос_овки (на)выр_ст что(бы) (н_)зашнуровывать и (н_)ра_шнуровывать.";
key[7] = "Черничкина-старшая тем временем успела расставить на столе, накрытом холщовой скатертью, расписанные синими цветочками тарелки и разложить столовые приборы. Ножи и вилки - справа от тарелки, ложки - слева. Когда она открыла крышку кастрюльки, облачко пара вырвалось наружу, и густой аромат приготовленного супа поплыл по комнате. «Всё-таки хорошо готовить - настоящее искусство», подумала старшая сестра и ещё раз полюбовалась своим произведением. Разноцветные овощи: сладкий болгарский перец, жёлтый и тёмно-красный, ярко-оранжевая морковка, зелёный горошек щедро приправленные пряными травами, радовали глаз.\n" +
    "Интересно, удастся ли уговорить сестру съесть тарелочку? Ведь она такая привередливая! Черничкина-старшая посмотрела на сестру и увидела, что та по-прежнему лежит на диване, уставившись в потолок. Зная, как непросто преодолеть плохое настроение сестры, Черничкина-старшая постаралась её отвлечь.\n" +
    "- Будь добра, - примирительно сказала Черничкина-старшая, - нарежь хлеб и намажь ломтики маслом!\n" +
    "Глотая слёзы, младшая сестра уложила приготовленные бутерброды в плетёную из соломки хлебницу и, придвинув к себе тарелку с супом, воткнула веточку петрушки в ломтик варёной морковки. Секунда - и она уже гонит красную лодочку от одного края тарелки до другого.\n" +
    "- Вот молодец, заодно и суп остудишь! - одобрила её старшая сестра.\n" +
    "Однако скоро лодка села на картофельную мель. Черничкина-младшая подула ещё сильнее, и шторм усилился и стал пятибалльным. Бульонное море разбушевалось вовсю, и преогромная волна, докатившись до края тарелки, выплеснулась на скатерть. Черничкина-младшая промокнула лужу салфеткой и виновато взглянула на сестру. «Ну, сейчас начнётся!» - подумала младшая сестра. «Это уже чересчур! Нельзя же себе всё позволять! - скажет Черничкина-старшая маминым голосом. - Ты что, хочешь, чтобы все считали тебя избалованной? Ума не приложу, что бы такое придумать, чтобы ты стала поаккуратнее!»\n" +
    "Однако старшей сестре в данный момент было не до неё: стоя перед зеркалом, она увлечённо примеряла недавно купленные наряды. «Это они с Федюшкиным в кино собираются!» - догадалась Черничкина-младшая и стала заворожённо рассматривать сестру, которая всегда была для неё недосягаемым идеалом. Во-первых, отлично воспитана родителями: всегда сдержанна, никаких глупостей не говорит, её слова обдуманны. Во-вторых, сестра прекрасно образованна и знает всё на свете. А какая она сейчас красавица: воротничок клетчатой рубашки небрежно расстёгнут, юбка словно колокол, но главное, конечно, кожаная сумочка с серебряным замочком. Щёлк - открылась, щёлк - закрылась!\n" +
    "Черничкина-младшая быстро съела суп и решила, что, когда вырастет, будет одеваться так же. Пока же она предпочитала джинсы и кроссовки на вырост, чтобы не зашнуровывать и не расшнуровывать.";

(function ($, undefined) {
    $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }
})(jQuery);

(function ($, undefined) {
    $.fn.setCursorPosition = function (pos) {
        var el = $(this).get(0);
        if (el.setSelectionRange) {
            el.focus();
            el.setSelectionRange(pos, pos);
        } else if (el.createTextRange) {
            const range = el.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
})(jQuery);

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) return this.valueOf();
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

$(document).ready(()=>{
    let textArea = $("#myText");
    let cursorPosition = 0;
    textArea.focus();
    textArea.val(test[variant]);
    textArea.setCursorPosition(0);
    $("#check").on("click",() => {
        $("#result").html(check(textArea.val(), key[variant]));
    })
})

// Compare textArea with key and make html output with marked mistakes as <span class='mistake'>
function check(textArea, key) {
    const length = Math.min(textArea.length, key.length);
    let result = '';
    let j = 0;
    for (let i = 0; i < length; i++) {
        let char = textArea.charAt(j);
        const keyChar = key.charAt(i);
        if (char === keyChar) result += char;
        else { // check for mistakes
            // check '', '-', ' '
            switch (char) {
                case ' ':
                    if (keyChar === '-') {
                        result += '<span class="mistake">-</span>';
                    } else if (keyChar === ',') {
                        result += '<span class="mistake">,</span>';
                        --j;
                    } else {
                        result += '<span class="mistake">|</span>';
                        --i;
                    }
                    break;
                case '-':
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                    } else {
                        result += '<span class="mistake">|</span>';
                        --i;
                    }
                    break;
                case ',':
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                        ++j;
                    }
                    break;
                default:
                    if (keyChar === ' ') {
                        result += '<span class="mistake">_</span>';
                        --j;
                    }
                    else if (keyChar === '-') {
                        result += '<span class="mistake">-</span>';
                        --j;
                    }
                    else {
                        result += '<span class="mistake">' + keyChar + '</span>';
                    }
            }
        }
        ++j;
    }
    return result;
}