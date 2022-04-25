(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EditAddress"],{"00f0":function(a,e,s){"use strict";s("b91b")},"9d97":function(a,e,s){"use strict";s("f1f9")},a498:function(a,e,s){"use strict";s("e958")},b91b:function(a,e,s){},e958:function(a,e,s){},ed7b:function(a,e,s){"use strict";s.r(e);var n=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"edit-address-container"},[s("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:a.title,fixed:""}},[s("div",{attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"iconfont icon-fanhui",on:{click:function(e){return a.$router.go(-1)}}})])]),s("van-form",{staticClass:"main-wrap",on:{submit:a.saveAddress}},[s("div",{staticClass:"form-content"},[s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.firstName")))]),s("van-field",{attrs:{required:"",clearable:"",placeholder:a.$t("address.firstName"),name:"firstname",rules:[{required:!0,message:a.$t("address.firstNameHint")}]},model:{value:a.editAddress.recFirstname,callback:function(e){a.$set(a.editAddress,"recFirstname",e)},expression:"editAddress.recFirstname"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.lastName")))]),s("van-field",{attrs:{required:"",clearable:"",placeholder:a.$t("address.lastName"),name:"lastname",rules:[{required:!0,message:a.$t("address.lastNameHint")}]},model:{value:a.editAddress.recLastname,callback:function(e){a.$set(a.editAddress,"recLastname",e)},expression:"editAddress.recLastname"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.address1")))]),s("van-field",{attrs:{rows:"1",autosize:"",type:"textarea",required:"",clearable:"",placeholder:a.$t("address.address1Hint"),name:"street_address",rules:[{required:!0,message:a.$t("address.addressError")}]},model:{value:a.editAddress.streetAddr,callback:function(e){a.$set(a.editAddress,"streetAddr",e)},expression:"editAddress.streetAddr"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"white"},[a._v("*")]),a._v(" "+a._s(a.$t("address.address2")))]),s("van-field",{attrs:{rows:"1",autosize:"",type:"textarea",name:"suburb",clearable:"",placeholder:a.$t("address.address2Hint")},model:{value:a.editAddress.extendAddr,callback:function(e){a.$set(a.editAddress,"extendAddr",e)},expression:"editAddress.extendAddr"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.city")))]),s("van-field",{attrs:{required:"",clearable:"",name:"city",placeholder:a.$t("address.city"),rules:[{required:!0,message:a.$t("address.cityHint")}]},model:{value:a.editAddress.city,callback:function(e){a.$set(a.editAddress,"city",e)},expression:"editAddress.city"}})],1),a.provinceList.length>0?s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.province")))]),s("van-field",{attrs:{required:"",readonly:"","is-link":"","input-align":"right",rules:[{required:!0,message:a.$t("address.provinceHint")}]},on:{click:a.showProvincePopup},model:{value:a.editAddress.province,callback:function(e){a.$set(a.editAddress,"province",e)},expression:"editAddress.province"}})],1):a._e(),0==a.provinceList.length?s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.province")))]),s("van-field",{attrs:{required:"",clearable:"",rules:[{required:!0,message:a.$t("address.provinceHint")}]},model:{value:a.editAddress.province,callback:function(e){a.$set(a.editAddress,"province",e)},expression:"editAddress.province"}})],1):a._e(),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.postCode")))]),s("van-field",{attrs:{required:"",clearable:"",placeholder:a.$t("address.postCode"),name:"postcode",rules:[{required:!0,message:a.$t("address.postCodeHint")}]},model:{value:a.editAddress.postCode,callback:function(e){a.$set(a.editAddress,"postCode",e)},expression:"editAddress.postCode"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.country")))]),s("van-field",{attrs:{required:"",readonly:"","is-link":"","input-align":"right",rules:[{required:!0}]},on:{click:a.showCountryPopup},model:{value:a.editAddress.fullCountry,callback:function(e){a.$set(a.editAddress,"fullCountry",e)},expression:"editAddress.fullCountry"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.phoneNumber")))]),s("van-field",{attrs:{required:"",clearable:"",placeholder:a.$t("address.phoneNumber"),name:"telephone",rules:[{required:!0,message:a.$t("address.phoneNumberHint")}]},model:{value:a.editAddress.telephone,callback:function(e){a.$set(a.editAddress,"telephone",e)},expression:"editAddress.telephone"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"white"},[a._v("*")]),a._v(" "+a._s(a.$t("address.phoneNumber2")))]),s("van-field",{attrs:{clearable:"",placeholder:a.$t("address.phoneNumber2"),name:"telephone"},model:{value:a.editAddress.telephone1,callback:function(e){a.$set(a.editAddress,"telephone1",e)},expression:"editAddress.telephone1"}})],1),s("div",{staticClass:"item-wrap"},[s("div",{staticClass:"title-label"},[s("span",{staticClass:"red"},[a._v("*")]),a._v(" "+a._s(a.$t("address.email")))]),s("van-field",{attrs:{required:"",clearable:"",placeholder:a.$t("address.email"),name:"email_address",rules:[{required:!0,validator:a.emailValidator,message:a.$t("address.emailHint")}]},model:{value:a.editAddress.email,callback:function(e){a.$set(a.editAddress,"email",e)},expression:"editAddress.email"}})],1),a.isBillingAddress?a._e():s("div",{staticClass:"margin-top-10"},[s("van-cell",{attrs:{center:"",title:a.$t("address.makeDefault")},scopedSlots:a._u([{key:"right-icon",fn:function(){return[s("van-switch",{attrs:{size:"20","active-color":"#555"},model:{value:a.isDefault,callback:function(e){a.isDefault=e},expression:"isDefault"}})]},proxy:!0}],null,!1,1788937346)})],1)]),s("div",{staticClass:"btn-wrap"},[s("van-button",{staticClass:"save-btn",attrs:{"native-type":"submit",size:"large"}},[a._v(a._s(a.$t("common.save")))])],1)]),s("van-popup",{style:{height:"100%",width:"100%",overflow:"hidden"},model:{value:a.countryPanelShowFlag,callback:function(e){a.countryPanelShowFlag=e},expression:"countryPanelShowFlag"}},[s("CountryListPanel",{attrs:{close:a.hideCountryPopup,selectedCountry:a.editAddress.country},on:{transferCountry:a.changeCountry}})],1),s("van-popup",{style:{height:"100%",width:"100%",overflow:"hidden"},model:{value:a.provincePanelShowFlag,callback:function(e){a.provincePanelShowFlag=e},expression:"provincePanelShowFlag"}},[s("ProvinceListPanel",{attrs:{close:a.hideProvincePopup,provinceList:a.provinceList,selectedProvince:a.editAddress.province},on:{transferProvince:a.changeProvince}})],1)],1)},r=[],t=(s("e7e5"),s("d399")),i=s("1da1"),o=s("5530"),d=(s("96cf"),s("159b"),s("b0c0"),s("4d63"),s("ac1f"),s("25f0"),s("c24f")),l=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"country-container"},[s("van-nav-bar",{ref:"header",staticClass:"app-nav-bar",attrs:{title:a.$t("address.chooseCountryTitle")}},[s("div",{attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"iconfont icon-fanhui",on:{click:a.close}})])]),s("van-radio-group",{ref:"countryList",staticClass:"country-wrap",model:{value:a.currentCotuntry,callback:function(e){a.currentCotuntry=e},expression:"currentCotuntry"}},a._l(a.list,(function(e,n){return s("van-cell",{key:n,attrs:{clickable:""},on:{click:function(e){return a.clickCountry(n)}},scopedSlots:a._u([{key:"title",fn:function(){return[s("span",{domProps:{innerHTML:a._s(e.name)}})]},proxy:!0},{key:"right-icon",fn:function(){return[s("van-radio",{ref:"selectedRadio"+e.code,refInFor:!0,attrs:{name:e.code},on:{click:function(e){return a.clickCountry(n)}}})]},proxy:!0}],null,!0)})})),1)],1)},u=[],c=[{code:"AR",name:"Argentina",state:["Antartida e Islas del Atlantico","Buenos Aires","Catamarca","Chaco","Chubut","Cordoba","Corrientes","Distrito Federal","Entre Rios","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquen","Rio Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucuman"]},{code:"AU",name:"Australia",state:["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South Australia","Tasmania","Victoria","Western Australia"]},{code:"AT",name:"Austria",state:["Burgenland","Kärnten","Nieder&ouml;sterreich","Ober&ouml;sterreich","Salzburg","Steiermark","Tirol","Vorarlberg","Wien"]},{code:"BE",name:"Belgium",state:["Antwerpen","Brabant Wallon","Brussels-Capital Region","Hainaut","Limburg","Liège","Luxembourg","Namur","Oost-Vlaanderen","Vlaams Brabant","West-Vlaanderen"]},{code:"BR",name:"Brazil",state:["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Paraná","Paraíba","Pará","Pernambuco","Piauí","Rio Grande do Norte","Rio Grande do Sul","Rio de Janeiro","Rondônia","Roraima","Santa Catarina","Sergipe","São Paulo","Tocantins"]},{code:"BG",name:"Bulgaria",state:["Blagoevgrad","Burgas","Dobrich","Gabrovo","Haskovo","Kardjali","Kyustendil","Lovech","Montana","Pazardjik","Pernik","Pleven","Plovdiv","Razgrad","Ruse","Shumen","Silistra","Sliven","Smolyan","Sofia","Sofia - town","Stara Zagora","Targovishte","Varna","Veliko Tarnovo","Vidin","Vratza","Yambol"]},{code:"CA",name:"Canada",state:["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Québec","Saskatchewan","Yukon Territory"]},{code:"CL",name:"Chile",state:["Aisen del General Carlos Ibanez","Antofagasta","Araucania","Arica y Parinacota","Atacama","Bio-Bio","Coquimbo","Libertador General Bernardo O'Higgins","Los Lagos","Los Rios","Magallanes y de la Antartica Chilena","Maule","Region Metropolitana","Tarapaca","Valparaiso"]},{code:"CO",name:"Colombia",state:["Amazonas","Antioquia","Arauca","Atlantico","Bogota D.C.","Bolivar","Boyaca","Caldas","Caqueta","Casanare","Cauca","Cesar","Choco","Cordoba","Cundinamarca","Guainia","Guajira","Guaviare","Huila","Magdalena","Meta","Narino","Norte de Santander","Putumayo","Quindio","Risaralda","San Andres y Providencia","Santander","Sucre","Tolima","Valle del Cauca","Vaupes","Vichada"]},{code:"CZ",name:"Czech Republic",state:["Jihomoravský","Jihočeský","Karlovarský","Královehradecký","Liberecký","Moravskoslezský","Olomoucký","Pardubický","Plzeňský","Praha","Středočeský","Vysočina","Zlínský","Ústecký"]},{code:"DK",name:"Denmark",state:["Arhus","Bornholm","Copenhagen","Faroe Islands","Frederiksborg","Fyn","Kobenhavn","Nordjylland","Ribe","Ringkobing","Roskilde","Sonderjylland","Storstrom","Vejle","Vestjælland","Viborg"]},{code:"DE",name:"Deutschland",state:["Baden-Württemberg","Bayern","Berlin","Brandenburg","Bremen","Hamburg","Hessen","Mecklenburg-Vorpommern","Niedersachsen","Nordrhein-Westfalen","Rheinland-Pfalz","Saarland","Sachsen","Sachsen-Anhalt","Schleswig-Holstein","Thüringen"]},{code:"ES",name:"España",state:["Álava","Ávila","Albacete","Alicante","Almeria","Asturias","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Córdoba","Cantabria","Castellón","Ceuta","Ciudad Real","Cuenca","Girona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","La Coruña","La Rioja","Las Palmas","Leon","Lleida","Lugo","Madrid","Malaga","Melilla","Murcia","Navarra","Ourense","Palencia","Pontevedra","Salamanca","Santa Cruz de Tenerife","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"]},{code:"FI",name:"Finland",state:["Ahvenanmaan lääni","Etelä-Suomen lääni","Itä-Suomen lääni","Lapin lääni","Länsi-Suomen lääni","Oulun lääni"]},{code:"FR",name:"France",state:["Ain","Aisne","Allier","Alpes Maritimes","Alpes de Haute Provence","Ard&egrave;che","Ardennes","Ari&egrave;ge","Aube","Aude","Aveyron","Bas Rhin","Bouches du Rhône","Côte d'or","Côtes d'Armor","Calvados","Cantal","Charente","Charente Maritime","Cher","Corrèze","Corse du Sud","Creuse","Deux Sèvres","Dordogne","Doubs","Drôme","Essonne","Eure","Eure et Loir","Finistère","Gard","Gers","Gironde","Hérault","Haut Rhin","Haute Corse","Haute Garonne","Haute Loire","Haute Marne","Haute Saône","Haute Savoie","Haute Vienne","Hautes Pyrénées","Hautes-Alpes","Hauts de Seine","Ille et Vilaine","Indre","Indre et Loire","Isére","Jura","Landes","Loir et Cher","Loire","Loire Atlantique","Loiret","Lot","Lot et Garonne","Lozère","Maine et Loire","Manche","Marne","Mayenne","Meurthe et Moselle","Meuse","Morbihan","Moselle","Nièvre","Nord","Oise","Orne","Paris","Pas de Calais","Puy de D&ocirc;me","Pyrénées Atlantiques","Pyrénées Orientales","Rhône","Saône et Loire","Sarthe","Savoie","Seine Maritime","Seine St-Denis","Seine et Marne","Somme","Tarn","Tarn et Garonne","Territoire de Belfort","Val d'Oise","Val de Marne","Var","Vaucluse","Vendée","Vienne","Vosges","Yonne","Yvelines"]},{code:"GR",name:"Greece",state:["Attica","Central Greece","Central Macedonia","Crete","East Macedonia and Thrace","Epirus","Ionian Islands","North Aegean","Peloponnesos","South Aegean","Thessaly","West Greece","West Macedonia"]},{code:"HU",name:"Hungary",state:[]},{code:"IS",name:"Iceland",state:["Austurland","Hofuoborgarsvaeoi","Norourland eystra","Norourland vestra","Suourland","Suournes","Vestfiroir","Vesturland"]},{code:"ID",name:"Indonesia",state:["Aceh","Bali","Banten","Bengkulu","BoDeTaBek","Gorontalo","Jakarta Raya","Jambi","Jawa Barat","Jawa Tengah","Jawa Timur","Kalimantan Barat","Kalimantan Selatan","Kalimantan Tengah","Kalimantan Timur","Kepulauan Bangka Belitung","Lampung","Maluku","Maluku Utara","Nusa Tenggara Barat","Nusa Tenggara Timur","Papua","Riau","Sulawesi Selatan","Sulawesi Tengah","Sulawesi Tenggara","Sulawesi Utara","Sumatera Barat","Sumatera Selatan","Sumatera Utara","Yogyakarta"]},{code:"IE",name:"Ireland",state:["Carlow","Cavan","Clare","Cork","Donegal","Dublin","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Waterford","Westmeath","Wexford","Wicklow"]},{code:"IL",name:"Israel",state:["Be'er Sheva","Bika'at Hayarden","Eilat and Arava","Galil","Haifa","Jehuda Mountains","Jerusalem","Negev","Semaria","Sharon","Tel Aviv (Gosh Dan)"]},{code:"IT",name:"Italy",state:["Agrigento","Alessandria","Ancona","Aosta","Arezzo","Ascoli Piceno","Asti","Avellino","Bari","Barletta-Andria-Trani","Belluno","Benevento","Bergamo","Biella","Bologna","Bolzano","Brescia","Brindisi","Cagliari","Caltanissetta","Campobasso","Carbonia-Iglesias","Caserta","Catania","Catanzaro","Chieti","Como","Cosenza","Cremona","Crotone","Cuneo","Enna","Fermo","Ferrara","Firenze","Foggia","Forli-Cesena","Frosinone","Genova","Gorizia","Grosseto","Imperia","Isernia","L'Aquila","La Spezia","Latina","Lecce","Lecco","Livorno","Lodi","Lucca","Macerata","Mantova","Massa-Carrara","Matera","Medio Campidano","Messina","Milano","Modena","Monza e Brianza","Napoli","Novara","Nuoro","Ogliastra","Olbia-Tempio","Oristano","Padova","Palermo","Parma","Pavia","Perugia","Pesaro e Urbino","Pescara","Piacenza","Pisa","Pistoia","Pordenone","Potenza","Prato","Ragusa","Ravenna","Reggio Calabria","Reggio Emilia","Rieti","Rimini","Roma","Rovigo","Salerno","Sassari","Savona","Siena","Siracusa","Sondrio","Taranto","Teramo","Terni","Torino","Trapani","Trento","Treviso","Trieste","Udine","Varese","Venezia","Verbano-Cusio-Ossola","Vercelli","Verona","Vibo Valentia","Vicenza","Viterbo"]},{code:"LV",name:"Latvia",state:["Ainaži, Salacgrīvas novads","Aizkraukle, Aizkraukles novads","Aizkraukles novads","Aizpute, Aizputes novads","Aizputes novads","Aknīste, Aknīstes novads","Aknīstes novads","Aloja, Alojas novads","Alojas novads","Alsungas novads","Alūksne, Alūksnes novads","Alūksnes novads","Amatas novads","Ape, Apes novads","Apes novads","Auce, Auces novads","Auces novads","Babītes novads","Baldone, Baldones novads","Baldones novads","Baloži, Ķekavas novads","Baltinavas novads","Balvi, Balvu novads","Balvu novads","Bauska, Bauskas novads","Bauskas novads","Beverīnas novads","Brocēni, Brocēnu novads","Brocēnu novads","Burtnieku novads","Carnikavas novads","Cesvaine, Cesvaines novads","Cesvaines novads","Ciblas novads","Cēsis, Cēsu novads","Cēsu novads","Dagda, Dagdas novads","Dagdas novads","Daugavpils","Daugavpils novads","Dobele, Dobeles novads","Dobeles novads","Dundagas novads","Durbe, Durbes novads","Durbes novads","Engures novads","Garkalnes novads","Grobiņa, Grobiņas novads","Grobiņas novads","Gulbene, Gulbenes novads","Gulbenes novads","Iecavas novads","Ikšķile, Ikšķiles novads","Ikšķiles novads","Ilūkste, Ilūkstes novads","Ilūkstes novads","Inčukalna novads","Jaunjelgava, Jaunjelgavas novads","Jaunjelgavas novads","Jaunpiebalgas novads","Jaunpils novads","Jelgava","Jelgavas novads","Jēkabpils","Jēkabpils novads","Jūrmala","Kalnciems, Jelgavas novads","Kandava, Kandavas novads","Kandavas novads","Kocēnu novads ,bij. Valmieras)","Kokneses novads","Krimuldas novads","Krustpils novads","Krāslava, Krāslavas novads","Krāslavas novads","Kuldīga, Kuldīgas novads","Kuldīgas novads","Kārsava, Kārsavas novads","Kārsavas novads","Lielvārde, Lielvārdes novads","Lielvārdes novads","Liepāja","Limbaži, Limbažu novads","Limbažu novads","Lubāna, Lubānas novads","Lubānas novads","Ludza, Ludzas novads","Ludzas novads","Līgatne, Līgatnes novads","Līgatnes novads","Līvāni, Līvānu novads","Līvānu novads","Madona, Madonas novads","Madonas novads","Mazsalaca, Mazsalacas novads","Mazsalacas novads","Mālpils novads","Mārupes novads","Mērsraga novads","Naukšēnu novads","Neretas novads","Nīcas novads","Ogre, Ogres novads","Ogres novads","Olaine, Olaines novads","Olaines novads","Ozolnieku novads","Piltene, Ventspils novads","Preiļi, Preiļu novads","Preiļu novads","Priekule, Priekules novads","Priekules novads","Priekuļu novads","Pārgaujas novads","Pāvilosta, Pāvilostas novads","Pāvilostas novads","Pļaviņas, Pļaviņu novads","Pļaviņu novads","Raunas novads","Riebiņu novads","Rojas novads","Ropažu novads","Rucavas novads","Rugāju novads","Rundāles novads","Rēzekne","Rēzeknes novads","Rīga","Rūjiena, Rūjienas novads","Rūjienas novads","Sabile, Talsu novads","Salacgrīva, Salacgrīvas novads","Salacgrīvas novads","Salas novads","Salaspils novads","Salaspils, Salaspils novads","Saldus novads","Saldus, Saldus novads","Saulkrasti, Saulkrastu novads","Saulkrastu novads","Seda, Strenču novads","Sigulda, Siguldas novads","Siguldas novads","Skrunda, Skrundas novads","Skrundas novads","Skrīveru novads","Smiltene, Smiltenes novads","Smiltenes novads","Staicele, Alojas novads","Stende, Talsu novads","Stopiņu novads","Strenči, Strenču novads","Strenču novads","Subate, Ilūkstes novads","Sējas novads","Talsi, Talsu novads","Talsu novads","Tukuma novads","Tukums, Tukuma novads","Tērvetes novads","Vaiņodes novads","Valdemārpils, Talsu novads","Valka, Valkas novads","Valkas novads","Valmiera","Vangaži, Inčukalna novads","Varakļāni, Varakļānu novads","Varakļānu novads","Vecpiebalgas novads","Vecumnieku novads","Ventspils","Ventspils novads","Viesīte, Viesītes novads","Viesītes novads","Viļaka, Viļakas novads","Viļakas novads","Viļāni, Viļānu novads","Viļānu novads","Vārkavas novads","Zilupe, Zilupes novads","Zilupes novads","Ādažu novads","Ērgļu novads","Ķeguma novads","Ķegums, Ķeguma novads","Ķekavas novads"]},{code:"LU",name:"Luxembourg",state:["Capellen","Clervaux","Diekirch","Echternach","Esch-sur-Alzette","Grevenmacher","Luxembourg","Mersch","Redange","Remich","Vianden","Wiltz"]},{code:"MY",name:"Malaysia",state:["Johor","Kedah","Kelantan","Kuala Lumpur","Labuan","Melaka","Negeri Sembilan","Pahang","Perak","Perlis","Pulau Pinang","Putrajaya","Sabah","Sarawak","Selangor","Terengganu"]},{code:"MX",name:"Mexico",state:["Aguascalientes","Baja California Norte","Baja California Sur","Campeche","Chiapas","Chihuahua","Coahuila de Zaragoza","Colima","Distrito Federal","Durango","Guanajuato","Guerrero","Hidalgo","Jalisco","Mexico","Michoacan de Ocampo","Morelos","Nayarit","Nuevo Leon","Oaxaca","Puebla","Queretaro de Arteaga","Quintana Roo","San Luis Potosi","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz-Llave","Yucatan","Zacatecas"]},{code:"NL",name:"Netherlands",state:["Drenthe","Flevoland","Friesland","Gelderland","Groningen","Limburg","Noord Brabant","Noord Holland","Overijssel","Utrecht","Zeeland","Zuid Holland"]},{code:"NZ",name:"New Zealand",state:["Auckland","Bay of Plenty","Canterbury","Coromandel","Fiordland","Gisborne","Hawke's Bay","Manawatu-Wanganui","Marlborough","Mt Cook-Mackenzie","Nelson","Northland","Otago","Southland","Taranaki","Waikato","Wairarapa","Wellington","West Coast"]},{code:"NO",name:"Norway",state:["Akershus","Aust-Agder","Buskerud","Finnmark","Hedmark","Hordaland","More og Romdal","Nord-Trondelag","Nordland","Oppland","Oslo","Ostfold","Rogaland","Sogn og Fjordane","Sor-Trondelag","Svalbard","Telemark","Troms","Vest-Agder","Vestfold"]},{code:"PH",name:"Philippines",state:["Abra","Agusan del Norte","Agusan del Sur","Aklan","Albay","Antique","Apayao","Aurora","Basilan","Bataan","Batanes","Batangas","Benguet","Biliran","Bohol","Bukidnon","Bulacan","Cagayan","Camarines Norte","Camarines Sur","Camiguin","Capiz","Catanduanes","Cavite","Cebu","Compostela","Davao Oriental","Davao del Norte","Davao del Sur","Eastern Samar","Guimaras","Ifugao","Ilocos Norte","Ilocos Sur","Iloilo","Isabela","Kalinga","La Union","Laguna","Lanao del Norte","Lanao del Sur","Leyte","Maguindanao","Marinduque","Masbate","Mindoro Occidental","Mindoro Oriental","Misamis Occidental","Misamis Oriental","Mountain","Negros Occidental","Negros Oriental","North Cotabato","Northern Samar","Nueva Ecija","Nueva Vizcaya","Palawan","Pampanga","Pangasinan","Quezon","Quirino","Rizal","Romblon","Samar","Sarangani","Siquijor","Sorsogon","South Cotabato","Southern Leyte","Sultan Kudarat","Sulu","Surigao del Norte","Surigao del Sur","Tarlac","Tawi-Tawi","Zambales","Zamboanga Sibugay","Zamboanga del Norte","Zamboanga del Sur"]},{code:"PL",name:"Poland",state:["Dolnoslaskie","Kujawsko-Pomorskie","Lodzkie","Lubelskie","Lubuskie","Malopolskie","Mazowieckie","Opolskie","Podkarpackie","Podlaskie","Pomorskie","Slaskie","Swietokrzyskie","Warminsko-Mazurskie","Wielkopolskie","Zachodniopomorskie"]},{code:"PT",name:"Portugal",state:["Évora","Açores","Aveiro","Beja","Braga","Bragança","Castelo Branco","Coimbra","Faro","Guarda","Leiria","Lisboa","Madeira","Portalegre","Porto","Santarém","Setúbal","Viana do Castelo","Vila Real","Viseu"]},{code:"RO",name:"Romania",state:["Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Braila","Brasov","Bucuresti","Buzau","Calarasi","Caras-Severin","Cluj","Constanta","Covasna","Dimbovita","Dolj","Galati","Giurgiu","Gorj","Harghita","Hunedoara","Ialomita","Iasi","Ilfov","Maramures","Mehedinti","Mures","Neamt","Olt","Prahova","Salaj","Satu-Mare","Sibiu","Suceava","Teleorman","Timis","Tulcea","Valcea","Vaslui","Vrancea"]},{code:"SG",name:"Singapore",state:[]},{code:"SK",name:"Slovak Republic",state:["Banskobystrický","Bratislavský","Košický","Nitriansky","Prešovský","Trenčiansky","Trnavský","Žilinský"]},{code:"SE",name:"Sweden",state:["Örebro","Östergötland","Blekinge","Dalarna","Gävleborg","Gotland","Halland","Jämtland","Jönköping","Kalmar","Kronoberg","Norrbotten","Södermanland","Skåne","Stockholm","Uppsala","Värmland","Västerbotten","Västernorrland","Västmanland","Västra Götaland"]},{code:"CH",name:"Switzerland",state:["Aargau","Appenzell Ausserrhoden","Appenzell Innerrhoden","Basel-Landschaft","Basel-Stadt","Bern","Fribourg","Genève","Glarus","Graubünden","Jura","Luzern","Neuchâtel","Nidwald","Obwald","Schaffhausen","Schwyz","Solothurn","St. Gallen","Thurgau","Ticino","Uri","Valais","Vaud","Zürich","Zug"]},{code:"TH",name:"Thailand",state:["Amnat Charoen","Ang Thong","Ayutthaya","Bangkok","Buriram","Chachoengsao","Chai Nat","Chaiyaphum","Chanthaburi","Chiang Mai","Chiang Rai","Chon Buri","Chumphon","Kalasin","Kamphaeng Phet","Kanchanaburi","Khon Kaen","Krabi","Lampang","Lamphun","Loei","Lop Buri","Mae Hong Son","Maha Sarakham","Mukdahan","Nakhon Nayok","Nakhon Pathom","Nakhon Phanom","Nakhon Ratchasima","Nakhon Sawan","Nakhon Si Thammarat","Nan","Narathiwat","Nong Bua Lamphu","Nong Khai","Nonthaburi","Pathum Thani","Pattani","Phangnga","Phatthalung","Phayao","Phetchabun","Phetchaburi","Phichit","Phitsanulok","Phrae","Phuket","Prachin Buri","Prachuap Khiri Khan","Ranong","Ratchaburi","Rayong","Roi Et","Sa Kaeo","Sakon Nakhon","Samut Prakan","Samut Sakhon","Samut Songkhram","Sara Buri","Satun","Sing Buri","Sisaket","Songkhla","Sukhothai","Suphan Buri","Surat Thani","Surin","Tak","Trang","Trat","Ubon Ratchathani","Udon Thani","Uthai Thani","Uttaradit","Yala","Yasothon"]},{code:"UA",name:"Ukraine",state:["Cherkas'ka Oblast'","Chernihivs'ka Oblast'","Chernivets'ka Oblast'","Crimea","Dnipropetrovs'ka Oblast'","Donets'ka Oblast'","Ivano-Frankivs'ka Oblast'","Kharkivs'ka Oblast'","Khersons'ka Oblast'","Khmel'nyts'ka Oblast'","Kirovohrads'ka Oblast'","Kyiv","Kyivs'ka Oblast'","L'vivs'ka Oblast'","Luhans'ka Oblast'","Mykolayivs'ka Oblast'","Odes'ka Oblast'","Poltavs'ka Oblast'","Rivnens'ka Oblast'","Sevastopol'","Sums'ka Oblast'","Ternopil's'ka Oblast'","Vinnyts'ka Oblast'","Volyns'ka Oblast'","Zakarpats'ka Oblast'","Zaporiz'ka Oblast'","Zhytomyrs'ka oblast'"]},{code:"GB",name:"United Kingdom",state:["Aberdeen","Aberdeenshire","Anglesey","Angus","Argyll and Bute","Bedfordshire","Berkshire","Blaenau Gwent","Bridgend","Bristol","Buckinghamshire","Caerphilly","Cambridgeshire","Cardiff","Carmarthenshire","Ceredigion","Cheshire","Clackmannanshire","Conwy","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Denbighshire","Derbyshire","Devon","Dorset","Dumfries and Galloway","Dundee","Durham","East Ayrshire","East Dunbartonshire","East Lothian","East Renfrewshire","East Riding of Yorkshire","East Sussex","Edinburgh","Essex","Falkirk","Fife","Flintshire","Glasgow","Gloucestershire","Greater London","Greater Manchester","Gwynedd","Hampshire","Herefordshire","Hertfordshire","Highlands","Inverclyde","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Merseyside","Merthyr Tydfil","Midlothian","Monmouthshire","Moray","Neath Port Talbot","Newport","Norfolk","North Ayrshire","North Lanarkshire","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Orkney Islands","Oxfordshire","Pembrokeshire","Perth and Kinross","Powys","Renfrewshire","Rhondda Cynon Taff","Rutland","Scottish Borders","Shetland Islands","Shropshire","Somerset","South Ayrshire","South Lanarkshire","South Yorkshire","Staffordshire","Stirling","Suffolk","Surrey","Swansea","Torfaen","Tyne and Wear","Vale of Glamorgan","Warwickshire","West Dunbartonshire","West Lothian","West Midlands","West Sussex","West Yorkshire","Western Isles","Wiltshire","Worcestershire","Wrexham"]},{code:"US",name:"United States",state:["Alabama","Alaska","American Samoa","Arizona","Arkansas","Armed Forces Africa","Armed Forces Americas","Armed Forces Canada","Armed Forces Europe","Armed Forces Middle East","Armed Forces Pacific","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States Of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}],v={name:"CountryListPanel",props:{close:{type:Function},selectedCountry:{type:String,default:"US"}},data:function(){return{list:c,currentCotuntry:this.selectedCountry}},watch:{selectedCountry:function(){this.currentCotuntry=this.selectedCountry}},created:function(){},mounted:function(){var a=this.$refs.countryList.$el,e=this.$refs["selectedRadio"+this.selectedCountry][0].$el,s=this.$refs.header.$el;a.scrollTo(0,e.offsetParent.offsetTop-s.offsetHeight)},methods:{clickCountry:function(a){this.close(),this.$emit("transferCountry",this.list[a])}}},h=v,m=(s("00f0"),s("2877")),p=Object(m["a"])(h,l,u,!1,null,"5c2d35f1",null),g=p.exports,k=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"province-container"},[s("van-nav-bar",{ref:"header",staticClass:"app-nav-bar",attrs:{title:a.$t("address.chooseProvinceTitle")}},[s("div",{attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"iconfont icon-fanhui",on:{click:a.close}})])]),s("van-radio-group",{ref:"provinceList",staticClass:"province-wrap",model:{value:a.currentProvince,callback:function(e){a.currentProvince=e},expression:"currentProvince"}},a._l(a.provinceList,(function(e,n){return s("van-cell",{key:n,attrs:{clickable:""},on:{click:function(e){return a.clickProvince(n)}},scopedSlots:a._u([{key:"title",fn:function(){return[s("span",{domProps:{innerHTML:a._s(e)}})]},proxy:!0},{key:"right-icon",fn:function(){return[s("van-radio",{ref:"selectedRadio"+e,refInFor:!0,attrs:{name:e},on:{click:function(e){return a.clickProvince(n)}}})]},proxy:!0}],null,!0)})})),1)],1)},b=[],C={name:"ProvinceListPanel",props:{close:{type:Function},provinceList:{type:Array},selectedProvince:{type:String}},data:function(){return{currentProvince:this.selectedProvince}},watch:{selectedProvince:function(){this.currentProvince=this.selectedProvince}},mounted:function(){var a=this.$refs.provinceList.$el,e=this.$refs["selectedRadio"+this.selectedProvince][0].$el,s=this.$refs.header.$el;a.scrollTo(0,e.offsetParent.offsetTop-s.offsetHeight)},methods:{clickProvince:function(a){this.close(),this.$emit("transferProvince",this.provinceList[a])}}},S=C,f=(s("9d97"),Object(m["a"])(S,k,b,!1,null,"14b18954",null)),A=f.exports,y=s("fa7d"),P={name:"EditAddress",components:{CountryListPanel:g,ProvinceListPanel:A},data:function(){return{title:null!=this.$route.query.title?this.$route.query.title:this.$t("address.title"),isBillingAddress:null!=this.$route.query.title,editAddress:null!=this.$route.query.data?this.$route.query.data:{},type:null!=this.$route.query.type?this.$route.query.type:"0",countryPanelShowFlag:!1,provincePanelShowFlag:!1,provinceList:[],orderId:this.$route.query.orderId}},computed:{isDefault:{get:function(){return"1"===this.editAddress.isDefault},set:function(a){this.$set(this.editAddress,"isDefault",a?"1":"0")}}},created:function(){var a=this;this.editAddress.country||(this.editAddress.country=this.$store.state.currentCountry),c.forEach((function(e){e.code===a.editAddress.country&&(a.provinceList=e.state,"0"===a.type&&Object.assign(a.editAddress,{country:e.code,fullCountry:e.name,province:e.state[0]}))})),this.editAddress.email||(this.editAddress.email=this.$store.state.user.email)},methods:{emailValidator:function(a){var e=new RegExp(y["c"]);return e.test(a)},saveAddress:function(a){var e=Object(o["a"])(Object(o["a"])({},this.editAddress),{},{userId:this.$store.state.user.userId});"0"===this.type?(e=Object(o["a"])(Object(o["a"])({},e),{},{extendAddr:this.editAddress.extendAddr,isBillAddr:"0",telephone1:this.editAddress.telephone1,isDefault:this.isDefault?"1":"0"}),this.requestAddAddress(e)):"1"===this.type&&this.requestEditAddress(e)},requestAddAddress:function(a){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(d["a"])({inputParams:JSON.stringify(a)}).then((function(){t["a"].success(e.$t("common.addSuccess")),e.$router.go(-1)}));case 2:case"end":return s.stop()}}),s)})))()},requestEditAddress:function(a){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.orderId&&(a.orderId=e.orderId),s.next=3,Object(d["e"])({inputParams:JSON.stringify(a)}).then((function(){t["a"].success(e.$t("common.editSuccess")),e.$router.go(-1)}));case 3:case"end":return s.stop()}}),s)})))()},showCountryPopup:function(){this.countryPanelShowFlag=!0},hideCountryPopup:function(){this.countryPanelShowFlag=!1},showProvincePopup:function(){this.provincePanelShowFlag=!0},hideProvincePopup:function(){this.provincePanelShowFlag=!1},changeCountry:function(a){Object.assign(this.editAddress,{fullCountry:a.name,country:a.code}),this.provinceList=a.state,a.state&&a.state.length>0?(Object.assign(this.editAddress,{province:a.state[0]}),this.showProvincePopup()):Object.assign(this.editAddress,{province:""})},changeProvince:function(a){this.$set(this.editAddress,"province",a)}}},L=P,B=(s("a498"),Object(m["a"])(L,n,r,!1,null,"e2bbeb6a",null));e["default"]=B.exports},f1f9:function(a,e,s){}}]);