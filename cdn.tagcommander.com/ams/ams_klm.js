"undefined" == typeof tC.ams && (tC.ams = []),
	"undefined" == typeof tC.ams.tmp && (tC.ams.tmp = []),
	tC.ams.id = "",
	tC.ams.date = new Date,
	tC.ams.id = "" == tC.getCookie("TCID") ? tC.ams.id + tC.ams.date.getFullYear() + (tC.ams.date.getMonth() + 1) + tC.ams.date.getDay() + tC.ams.date.getHours() + tC.ams.date.getMinutes() + tC.ams.date.getSeconds() + parseInt(12345678942 * Math.random()) : tC.getCookie("TCID"),
	tC.setCookie("TCID", tC.ams.id, 365, "/", tC.domain()),
	tC.ams.session = "",
	tC.ams.new_session = !0,
	"" == tC.getCookie("TCSESSION") ? (tC.ams.new_session = !0,
			tC.ams.session = tC.ams.session + tC.ams.date.getFullYear() + (tC.ams.date.getMonth() + 1) + tC.ams.date.getDay() + tC.ams.date.getHours() + tC.ams.date.getMinutes() + tC.ams.date.getSeconds() + parseInt(12345678942 * Math.random())) : (tC.ams.new_session = !1,
			tC.ams.session = tC.getCookie("TCSESSION")),
			tC.setCookie("TCSESSION", tC.ams.session, 0, "/", tC.domain()),
			tC.ams.hdoc = "";
try {
	    "undefined" != typeof top && "undefined" != typeof top.document && (tC.ams.hdoc = top.document)

} catch (e) {}
"" === tC.ams.hdoc && (tC.ams.hdoc = document),
	tC.ams.paying = 0,
	tC.ams.gclid = tC.getParamURL("gclid"),
	tC.ams.rand = Math.random(),
	tC.ams.keywords = "",
	tC.ams.ssearche = [],
	tC.ams.ssearchv = [],
	tC.ams.ssearche[0] = "google",
	tC.ams.ssearchv[0] = "q",
	tC.ams.ssearche[1] = "yahoo",
	tC.ams.ssearchv[1] = "p",
	tC.ams.ssearche[2] = "msn",
	tC.ams.ssearchv[2] = "q",
	tC.ams.ssearche[3] = "aol",
	tC.ams.ssearchv[3] = "query",
	tC.ams.ssearche[4] = "aol",
	tC.ams.ssearchv[4] = "encquery",
	tC.ams.ssearche[5] = "lycos",
	tC.ams.ssearchv[5] = "query",
	tC.ams.ssearche[6] = "ask",
	tC.ams.ssearchv[6] = "q",
	tC.ams.ssearche[7] = "altavista",
	tC.ams.ssearchv[7] = "q",
	tC.ams.ssearche[8] = "netscape",
	tC.ams.ssearchv[8] = "query",
	tC.ams.ssearche[9] = "cnn",
	tC.ams.ssearchv[9] = "query",
	tC.ams.ssearche[10] = "looksmart",
	tC.ams.ssearchv[10] = "qt",
	tC.ams.ssearche[11] = "about",
	tC.ams.ssearchv[11] = "terms",
	tC.ams.ssearche[12] = "mamma",
	tC.ams.ssearchv[12] = "query",
	tC.ams.ssearche[13] = "alltheweb",
	tC.ams.ssearchv[13] = "q",
	tC.ams.ssearche[14] = "gigablast",
	tC.ams.ssearchv[14] = "q",
	tC.ams.ssearche[15] = "voila",
	tC.ams.ssearchv[15] = "rdata",
	tC.ams.ssearche[16] = "virgilio",
	tC.ams.ssearchv[16] = "qs",
	tC.ams.ssearche[17] = "live",
	tC.ams.ssearchv[17] = "q",
	tC.ams.ssearche[18] = "baidu",
	tC.ams.ssearchv[18] = "wd",
	tC.ams.ssearche[19] = "alice",
	tC.ams.ssearchv[19] = "qs",
	tC.ams.ssearche[20] = "yandex",
	tC.ams.ssearchv[20] = "text",
	tC.ams.ssearche[21] = "najdi",
	tC.ams.ssearchv[21] = "q",
	tC.ams.ssearche[22] = "aol",
	tC.ams.ssearchv[22] = "q",
	tC.ams.ssearche[23] = "club-internet",
	tC.ams.ssearchv[23] = "query",
	tC.ams.ssearche[24] = "mama",
	tC.ams.ssearchv[24] = "query",
	tC.ams.ssearche[25] = "seznam",
	tC.ams.ssearchv[25] = "q",
	tC.ams.ssearche[26] = "search",
	tC.ams.ssearchv[26] = "q",
	tC.ams.ssearche[27] = "wp",
	tC.ams.ssearchv[27] = "szukaj",
	tC.ams.ssearche[28] = "onet",
	tC.ams.ssearchv[28] = "qt",
	tC.ams.ssearche[29] = "netsprint",
	tC.ams.ssearchv[29] = "q",
	tC.ams.ssearche[30] = "google.interia",
	tC.ams.ssearchv[30] = "q",
	tC.ams.ssearche[31] = "szukacz",
	tC.ams.ssearchv[31] = "q",
	tC.ams.ssearche[32] = "yam",
	tC.ams.ssearchv[32] = "k",
	tC.ams.ssearche[33] = "pchome",
	tC.ams.ssearchv[33] = "q",
	tC.ams.ssearche[34] = "kvasir",
	tC.ams.ssearchv[34] = "searchExpr",
	tC.ams.ssearche[35] = "sesam",
	tC.ams.ssearchv[35] = "q",
	tC.ams.ssearche[36] = "ozu",
	tC.ams.ssearchv[36] = "q",
	tC.ams.ssearche[37] = "terra",
	tC.ams.ssearchv[37] = "query",
	tC.ams.ssearche[38] = "nostrum",
	tC.ams.ssearchv[38] = "query",
	tC.ams.ssearche[39] = "mynet",
	tC.ams.ssearchv[39] = "q",
	tC.ams.ssearche[40] = "ekolay",
	tC.ams.ssearchv[40] = "q",
	tC.ams.ssearche[41] = "search.ilse",
	tC.ams.ssearchv[41] = "search_for",
	tC.ams.ssearche[42] = "bing",
	tC.ams.ssearchv[42] = "q",
	tC.ams.ssearche[43] = "babylon",
	tC.ams.ssearchv[43] = "q",
	tC.ams.ssearche[44] = "daum",
	tC.ams.ssearchv[44] = "q",
	tC.ams.ssearche[45] = "eniro",
	tC.ams.ssearchv[45] = "search_word",
	tC.ams.ssearche[46] = "naver",
	tC.ams.ssearchv[46] = "query",
	tC.ams.ssearche[47] = "eniro",
	tC.ams.ssearchv[47] = "search_word",
	tC.ams.ssearche[48] = "rambler",
	tC.ams.ssearchv[48] = "words",
	tC.ams.scompshop = [],
	tC.ams.scompshop[0] = "shopping",
	tC.ams.scompshop[1] = "kelkoo",
	tC.ams.scomnet = [],
	tC.ams.scomnet[0] = "facebook",
	tC.ams.scomnet[1] = "linkedin",
	tC.ams.scomnet[2] = "viadeo",
	tC.ams.scomnet[3] = "trombi",
	tC.ams.scomnet[4] = "myspace",
	tC.ams.scomnet[5] = "orkut",
	tC.ams.scomnet[6] = "habbo",
	tC.ams.scomnet[7] = "xing",
	tC.ams.scomnet[8] = "yammer",
	tC.ams.scomnet[9] = "twitter",
	tC.ams.scomnet[10] = "t",
	tC.ams.meta_origin = function(s) {
		    var s = s.toLowerCase()
			          , a = ""
				        , e = "";
		    if ("" != s) {
			            var t = s.split("/");
				            a = t[2];
					            var m = a.split(".");
						            e = m[m.length - 2],
							            ("co" == e || "com" == e || "org" == e) && (e = m[m.length - 3])
									        
		    }
		        var C = tC.ams.hdoc.domain.toLowerCase()
				      , r = "";
			if ("" != C) {
				        var c = C.split(".");
					        r = c[c.length - 2],
						        ("co" == r || "com" == r || "org" == r) && (r = c[c.length - 3])
								    
			}
			    if ("" == s)
				            return tC.ams.new_session === !0 ? "DIRECT_ACCESS@@@" : !1;
			        for (var n = 0; n < tC.ams.ssearche.length; n++)
					if (e == tC.ams.ssearche[n]) {
						            var o = tC.getParamURL(tC.ams.ssearchv[n], s);
							                if ("undefined" != typeof tC.ams.sbrand)
										                for (var h = 0; h < tC.ams.sbrand.length; h++)
													                    if (-1 != unescape(o.toLowerCase()).indexOf(tC.ams.sbrand[h].toLowerCase()) && "" != tC.ams.sbrand[h])
																                            return "BRAND@@@" + tC.ams.ssearche[n] + "[" + o + "]";
									            return "SEO@@@" + tC.ams.ssearche[n] + "[" + o + "]"
											            
					}
				    for (var n = 0; n < tC.ams.scomnet.length; n++)
					            if (e == tC.ams.scomnet[n])
							                return "COM@@@" + tC.ams.scomnet[n];
				        for (var n = 0; n < tC.ams.scompshop.length; n++)
						        if (e == tC.ams.scompshop[n])
								            return "CSS@@@" + tC.ams.scompshop[n];
					    if (tC.ams.array_external_excluded = ["secure.ogone.com", "www.sandbox.paypal.com", "payment.sips-atos.com", "www.secury-surf.com", "www.paypal.com", "www.paiement.buyster.fr", "nxcb.sips-atos.com", "paiementaurore.fr"],
							    e != r) {
						            for (var n = 0; n < tC.ams.array_external_excluded.length; n++)
								                if (a == tC.ams.array_external_excluded[n])
											                return !1;
							            return "EXTERNAL_LINK@@@" + a
									        
					    }
					        return !1

	}
,
	"undefined" != typeof tC.ams.channel && null != tC.ams.channel && "" != tC.ams.channel && (tC.ams.paying = 1),
	"undefined" != typeof tC.ams.source && null != tC.ams.source && "" != tC.ams.source && (tC.ams.paying = 1),
	"undefined" != typeof tC.ams.campaign && null != tC.ams.campaign && "" != tC.ams.campaign && (tC.ams.paying = 1),
	"undefined" != typeof tC.ams.medium && null != tC.ams.medium && "" != tC.ams.medium && (tC.ams.paying = 1),
	0 == tC.ams.paying && (tC.ams.href = tC.ams.hdoc.referrer,
			tC.ams.channel_temp = tC.ams.meta_origin(tC.ams.href),
			tC.ams.channel_temp && (tC.ams.channel = tC.ams.channel_temp.split("@@@")[0],
				tC.ams.source = tC.ams.channel_temp.split("@@@")[1],
				"SEO" == tC.ams.channel && "" != tC.ams.gclid && (tC.ams.channel = "SEM",
					tC.ams.campaign = "GENERIC"),
				"BRAND" == tC.ams.channel && "" != tC.ams.gclid && (tC.ams.channel = "SEMBRAND",
					tC.ams.campaign = "BRAND"),
				("SEO" == tC.ams.channel || "SEM" == tC.ams.channel || "BRAND" == tC.ams.channel || "SEMBRAND" == tC.ams.channel) && (tC.ams.keywords = tC.ams.source.split("[")[1],
																		      tC.ams.keywords = tC.ams.keywords.substring(0, tC.ams.keywords.length - 1),
																		      tC.ams.source = tC.ams.source.split("[")[0]))),
	tC.ams.src = "",
	"undefined" != typeof tC.ams.channel && null != tC.ams.channel && "" != tC.ams.channel && (tC.ams.src += "&chn=" + tC.ams.channel),
	"undefined" != typeof tC.ams.source && null != tC.ams.source && "" != tC.ams.source && (tC.ams.src += "&src=" + tC.ams.source),
	"undefined" != typeof tC.ams.campaign && null != tC.ams.campaign && "" != tC.ams.campaign && (tC.ams.src += "&cmp=" + tC.ams.campaign),
	"undefined" != typeof tC.ams.medium && null != tC.ams.medium && "" != tC.ams.medium && (tC.ams.src += "&med=" + tC.ams.medium),
	"undefined" != typeof tC.ams.keywords && null != tC.ams.keywords && "" != tC.ams.keywords && (tC.ams.src += "&kw=" + tC.ams.keywords),
	"undefined" != typeof tC.ams.page_name && null != tC.ams.page_name && "" != tC.ams.page_name && (tC.ams.src += "&p=" + tC.ams.page_name),
	"undefined" != typeof tC.ams.page_type && null != tC.ams.page_type && "" != tC.ams.page_type && (tC.ams.src += "&pt=" + tC.ams.page_type),
	"undefined" != typeof tC.ams.additional_params && null != tC.ams.additional_params && "" != tC.ams.additional_params && (tC.ams.src += tC.ams.additional_params),
	"undefined" != typeof tC.ams.hdoc.referrer && null != tC.ams.hdoc.referrer && "" != tC.ams.hdoc.referrer && (tC.ams.src += -1 != tC.ams.hdoc.referrer.indexOf("?") ? "&ref=" + tC.ams.hdoc.referrer.substr(0, tC.ams.hdoc.referrer.indexOf("?")) : "&ref=" + tC.ams.hdoc.referrer),
	tC.ams.src_final = "",
	tC.ams.src_final = tC.ams.channel ? "../../" + tC.ams.dns + "/s3/?tcs=" + tC.ams.id_site + "&rand=" + 0.5286301976779344 + tC.ams.src : "../../" + tC.ams.dns + "/s3/?tcs=" + tC.ams.id_site + "&rand=" + 0.5286301976779344 + tC.ams.src,
	"undefined" != typeof tC.ams.redirect && 1 == tC.ams.redirect ? tC.setCookie("TCAMSSAVEHIT", tC.ams.src_final) : ("" != tC.getCookie("TCAMSSAVEHIT") && (tC.ams.px = new Image,
				tC.ams.px.src = tC.getCookie("TCAMSSAVEHIT"),
				tC.removeCookie("TCAMSSAVEHIT")),
			tC.ams.px = new Image,
			tC.ams.px.src = tC.ams.src_final);
