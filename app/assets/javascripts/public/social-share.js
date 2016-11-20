var templates = {
  facebook: 'https://www.facebook.com/sharer.php?s=100&p[title]={title}&u={url}&t={title}&p[summary]={text}&p[url]={url}',
  gplus: 'https://plus.google.com/share?url={url}',
  twitter: 'https://twitter.com/intent/tweet?url={url}&text={text}',
  stumbleupon: 'https://www.stumbleupon.com/submit?url={url}&title={title}',
  pinterest: 'https://www.pinterest.com/pin/create/button/?media={image}&url={url}&description={text}',
  linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}'
  // vk: 'https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}&noparse=true',
  // myworld: 'https://connect.mail.ru/share?url={url}&title={title}&description={text}&imageurl={image}',
  // odnoklassniki: 'http://odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}&st.comments={text}',
  // tumblr: 'https://tumblr.com/share?s=&v=3&t={title}&u={url}',
  // blogger: 'https://blogger.com/blog-this.g?t={text}&n={title}&u={url}',
  // delicious: 'https://delicious.com/save?url={url}&title={title}',
  // digg: 'https://digg.com/submit?url={url}&title={title}',
  // reddit: 'http://reddit.com/submit?url={url}&title={title}',
  // pocket: 'https://getpocket.com/edit?url={url}&title={title}',
  // chiq: 'http://www.chiq.com/create/bookmarklet?u={url}&i={image}&d={title}&c={url}',
  // qrifier: 'http://qrifier.com/q?inc=qr&type=url&size=350&string={url}',
  // qrsrc: 'http://www.qrsrc.com/default.aspx?shareurl={url}',
  // qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}',
  // tulinq: 'http://www.tulinq.com/enviar?url={url}&title={title}',
  // misterwong: 'http://www.mister-wong.com/index.php?action=addurl&bm_url={url}&bm_description={title}&bm_notice=',
  // sto_zakladok: 'http://www.100zakladok.ru/save/?bmurl={url}&bmtitle={title}',
  // two_linkme: 'http://www.2linkme.com/?collegamento={url}&id=2lbar',
  // adifni: 'http://www.adifni.com/account/bookmark/?bookmark_url={url}',
  // amazonwishlist: 'http://www.amazon.com/gp/wishlist/static-add?u={url}&t={title}',
  // amenme: 'http://www.amenme.com/AmenMe/Amens/AmenToThis.aspx?url={url}&title={title}',
  // aim: 'http://lifestream.aol.com/share/?url={url}&title={title}&description={text} ',
  // aolmail: 'http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?to=&subject={title}&body={{content}}',
  // arto: 'http://www.arto.com/section/linkshare/?lu={url}&ln={title}',
  // baidu: 'http://cang.baidu.com/do/add?it={title}&iu={url}&fr=ien&dc={text}',
  // bitly: 'https://bitly.com/a/bitmarklet?u={url}',
  // bizsugar: 'http://www.bizsugar.com/bizsugarthis.php?url={url}',
  // blinklist: 'http://www.blinklist.com/blink?u={url}&t={title}&d={text}',
  // blip: 'http://blip.pl/dashboard?body={title}%3A%20{url}',
  // blogmarks: 'http://blogmarks.net/my/new.php?mini=1&simple=1&url={url}&title={title}&content={text}',
  // blurpalicious: 'http://www.blurpalicious.com/submit/?url={url}&title={title}&desc={text}',
  // bobrdobr: 'http://bobrdobr.ru/addext.html?url={url}&title={title}&desc={text}',
  // bonzobox: 'http://bonzobox.com/toolbar/add?u={url}&t={title}&desc={text}',
  // bookmerkende: 'http://www.bookmerken.de/?url={url}&title={title}',
  // box: 'https://www.box.net/api/1.0/import?import_as=link&url={url}&name={title}&description={text}',
  // bryderi: 'http://bryderi.se/add.html?u={url}',
  // buddymarks: 'http://buddymarks.com/add_bookmark.php?bookmark_title={title}&bookmark_url={url}&bookmark_desc={text}',
  // camyoo: 'http://www.camyoo.com/note.html?url={url}',
  // care2: 'http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]={title}&share[link_url]={url}&share[content]={text}',
  // citeulike: 'http://www.citeulike.org/posturl?url={url}&title={title}',
  // classicalplace: 'http://www.classicalplace.com/?u={url}&t={title}&c={text}',
  // cosmiq: 'http://www.cosmiq.de/lili/my/add?url={url}',
  // diggita: 'http://www.diggita.it/submit.php?url={url}&title={title}',
  // diigo: 'http://www.diigo.com/post?url={url}&title={title}&desc={text}',
  // domelhor: 'http://domelhor.net/submit.php?url={url}&title={title}',
  // dotnetshoutout: 'http://dotnetshoutout.com/Submit?url={url}&title={title}',
  // douban: 'http://www.douban.com/recommend/?url={url}&title={title}',
  // dropjack: 'http://www.dropjack.com/submit.php?url={url}',
  // edelight: 'http://www.edelight.de/geschenk/neu?purl={url}',
  // ekudos: 'http://www.ekudos.nl/artikel/nieuw?url={url}&title={title}&desc={text}',
  // elefantapl: 'http://elefanta.pl/member/bookmarkNewPage.action?url={url}&title={title}&bookmarkVO.notes=',
  // embarkons: 'http://www.embarkons.com/sharer.php?u={url}&t={title}',
  // evernote: 'http://www.evernote.com/clip.action?url={url}&title={title}',
  // extraplay: 'http://www.extraplay.com/members/share.php?url={url}&title={title}&desc={text}',
  // ezyspot: 'http://www.ezyspot.com/submit?url={url}&title={title}',
  // fabulously40: 'http://fabulously40.com/writeblog?subject={title}&body={url}',
  // informazione: 'http://fai.informazione.it/submit.aspx?url={url}&title={title}&desc={text}',
  // fark: 'http://www.fark.com/cgi/farkit.pl?u={url}&h={title}',
  // farkinda: 'http://www.farkinda.com/submit?url={url}',
  // favable: 'http://www.favable.com/oexchange?url={url}&title={title}&desc={text}',
  // favlogde: 'http://www.favlog.de/submit.php?url={url}',
  // flaker: 'http://flaker.pl/add2flaker.php?title={title}&url={url}',
  // folkd: 'http://www.folkd.com/submit/{url}',
  // fresqui: 'http://fresqui.com/enviar?url={url}',
  // friendfeed: 'http://friendfeed.com/share?url={url}&title={title}',
  // funp: 'http://funp.com/push/submit/?url={url}',
  // fwisp: 'http://fwisp.com/submit.php?url={url}',
  // givealink: 'http://givealink.org/bookmark/add?url={url}&title={title}',
  // gmail: 'http://mail.google.com/mail/?view=cm&fs=1&to=&su={title}&body={text}&ui=1',
  // goodnoows: 'http://goodnoows.com/add/?url={url}',
  // google: 'http://www.google.com/bookmarks/mark?op=add&bkmk={url}&title={title}&annotation={text}',
  // googletranslate: 'http://translate.google.com/translate?hl=en&u={url}&tl=en&sl=auto',
  // greaterdebater: 'http://greaterdebater.com/submit/?url={url}&title={title}',
  // hackernews: 'http://news.ycombinator.com/submitlink?u={url}&t={title}',
  // hatena: 'http://b.hatena.ne.jp/bookmarklet?url={url}&btitle={title}',
  // hedgehogs: 'http://www.hedgehogs.net/mod/bookmarks/add.php?address={url}&title={title}',
  // hotmail: 'http://www.hotmail.msn.com/secure/start?action=compose&to=&subject={title}&body={{content}}',
  // w3validator: 'http://validator.w3.org/check?uri={url}&charset=%28detect+automatically%29&doctype=Inline&group=0',
  // ihavegot: 'http://www.ihavegot.com/share/?url={url}&title={title}&desc={text}',
  // instapaper: 'http://www.instapaper.com/edit?url={url}&title={title}&summary={text}',
  // isociety: 'http://isociety.be/share/?url={url}&title={title}&desc={text}',
  // iwiw: 'http://iwiw.hu/pages/share/share.jsp?v=1&u={url}&t={title}',
  // jamespot: 'http://www.jamespot.com/?action=spotit&u={url}&t={title}',
  // jumptags: 'http://www.jumptags.com/add/?url={url}&title={title}',
  // kaboodle: 'http://www.kaboodle.com/grab/addItemWithUrl?url={url}&pidOrRid=pid=&redirectToKPage=true',
  // kaevur: 'http://kaevur.com/submit.php?url={url}',
  // kledy: 'http://www.kledy.de/submit.php?url={url}&title={title}',
  // librerio: 'http://www.librerio.com/inbox?u={url}&t={title}',
  // linkuj: 'http://linkuj.cz?id=linkuj&url={url}&title={title}&description={text}&imgsrc=',
  // livejournal: 'http://www.livejournal.com/update.bml?subject={title}&event={url}',
  // logger24: 'http://logger24.com/?url={url}',
  // mashbord: 'http://mashbord.com/plugin-add-bookmark?url={url}',
  // meinvz: 'http://www.meinvz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com',
  // mekusharim: 'http://mekusharim.walla.co.il/share/share.aspx?url={url}&title={title}',
  // memori: 'http://memori.ru/link/?sm=1&u_data[url]={url}',
  // meneame: 'http://www.meneame.net/submit.php?url={url}',
  // mixi: 'http://mixi.jp/share.pl?u={url}',
  // moemesto: 'http://moemesto.ru/post.php?url={url}&title={title}',
  // myspace: 'http://www.myspace.com/Modules/PostTo/Pages/?u={url}&t={title}&c=',
  // n4g: 'http://www.n4g.com/tips.aspx?url={url}&title={title}',
  // netlog: 'http://www.netlog.com/go/manage/links/?view=save&origin=external&url={url}&title={title}&description={text}',
  // netvouz: 'http://netvouz.com/action/submitBookmark?url={url}&title={title}&popup=no&description={text}',
  // newstrust: 'http://newstrust.net/submit?url={url}&title={title}&ref=addthis',
  // newsvine: 'http://www.newsvine.com/_tools/seed&save?u={url}&h={title}&s={text}',
  // nujij: 'http://nujij.nl/jij.lynkx?u={url}&t={title}&b={text}',
  // oknotizie: 'http://oknotizie.virgilio.it/post?title={title}&url={url}',
  // oyyla: 'http://www.oyyla.com/gonder?phase=2&url={url}',
  // pdfonline: 'http://savepageaspdf.pdfonline.com/pdfonline/pdfonline.asp?cURL={url}',
  // pdfmyurl: 'http://pdfmyurl.com?url={url}',
  // phonefavs: 'http://phonefavs.com/bookmarks?action=add&address={url}&title={title}',
  // plaxo: 'http://www.plaxo.com/events?share_link={url}&desc={text}',
  // plurk: 'http://www.plurk.com/m?content={url}+({title})&qualifier=shares ',
  // posteezy: 'http://posteezy.com/node/add/story?title={title}&body={url}',
  // pusha: 'http://www.pusha.se/posta?url={url}&title={title}&description={text}',
  // rediff: 'http://share.rediff.com/bookmark/addbookmark?title={title}&bookmarkurl={url}',
  // redkum: 'http://www.redkum.com/add?url={url}&step=1&title={title}',
  // scoopat: 'http://scoop.at/submit?url={url}&title={title}&body={text}',
  // sekoman: 'http://sekoman.lv/home?status={title}&url={url}',
  // shaveh: 'http://shaveh.co.il/submit.php?url={url}&title={title}',
  // shetoldme: 'http://shetoldme.com/publish?url={url}&title={title}&body={text}',
  // sinaweibo: 'http://v.t.sina.com.cn/share/share.php?url={url}&title={title}',
  // sodahead: 'http://www.sodahead.com/news/submit/?url={url}&title={title}',
  // sonico: 'http://www.sonico.com/share.php?url={url}&title={title}',
  // springpad: 'http://springpadit.com/s?type=lifemanagr.Bookmark&url={url}&name={title}',
  // startaid: 'http://www.startaid.com/index.php?st=AddBrowserLink&type=Detail&v=3&urlname={url}&urltitle={title}&urldesc={text}',
  // startlap: 'http://www.startlap.hu/sajat_linkek/addlink.php?url={url}&title={title}',
  // studivz: 'http://www.studivz.net/Suggest/Selection/?u={url}&desc={title}&prov=addthis.com',
  // stuffpit: 'http://www.stuffpit.com/add.php?produrl={url}',
  // stumpedia: 'http://www.stumpedia.com/submit?url={url}',
  // svejo: 'http://svejo.net/story/submit_by_url?url={url}&title={title}&summary={text}',
  // symbaloo: 'http://www.symbaloo.com/en/add/?url={url}&title={title}',
  // thewebblend: 'http://thewebblend.com/submit?url={url}&title={title}',
  // thinkfinity: 'http://www.thinkfinity.org/favorite-bookmarklet.jspa?url={url}&subject={title}',
  // thisnext: 'http://www.thisnext.com/pick/new/submit/url/?description={text}&name={title}&url={url}',
  // tuenti: 'http://www.tuenti.com/share?url={url}',
  // typepad: 'http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title={title}&qp_href={url}&qp_text={text}',
  // viadeo: 'http://www.viadeo.com/shareit/share/?url={url}&title={title}&urlaffiliate=32005&encoding=UTF-8',
  // virb: 'http://virb.com/share?external&v=2&url={url}&title={title}',
  // visitezmonsite: 'http://www.visitezmonsite.com/publier?url={url}&title={title}&body={text}',
  // vybralisme: 'http://vybrali.sme.sk/sub.php?url={url}',
  // webnews: 'http://www.webnews.de/einstellen?url={url}&title={title}',
  // wirefan: 'http://www.wirefan.com/grpost.php?d=&u={url}&h={title}&d={text}',
  // wordpress: 'http://wordpress.com/wp-admin/press-this.php?u={url}&t={title}&s={text}&v=2',
  // wowbored: 'http://www.wowbored.com/submit.php?url={url}',
  // wykop: 'http://www.wykop.pl/dodaj?url={url}&title={title}&desc={text}',
  // yahoobkm: 'http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&u={url}&t={title}&d={text}',
  // yahoomail: 'http://compose.mail.yahoo.com/?To=&Subject={title}&body={{content}}',
  // yammer: 'https://www.yammer.com/home/bookmarklet?bookmarklet_pop=1&u={url}&t={title}',
  // yardbarker: 'http://www.yardbarker.com/author/new/?pUrl={url}&pHead={title}',
  // yigg: 'http://www.yigg.de/neu?exturl={url}&exttitle={title}&extdesc={text}',
  // yoolink: 'http://go.yoolink.to/addorshare?url_value={url}&title={title}',
  // yorumcuyum: 'http://www.yorumcuyum.com/?baslik={title}&link={url}',
  // youmob: 'http://youmob.com/mobit.aspx?title={title}&mob={url}',
  // zakladoknet: 'http://zakladok.net/link/?u={url}&t={title}',
  // ziczac: 'http://ziczac.it/a/segnala/?gurl={url}&gtit={title}',
  // whatsapp: 'whatsapp://send?text={url} {title}'
};

function initailizeSocialShare() {
  $(".share-group > a.share").on("click", function(e) {
    e.preventDefault();

    var media = $(this).data("media");
    var parent = $(this).parent();
    var title = "Investasiku | " + $(parent).data("title");
    var url = $(parent).data("url");

    if(media === "email") {
      var email = 'test@theearth.com';
      window.location = 'mailto:' + email + '?subject=' + title + '&body=' +   url;
      return true;
    }
    else {
      var image = $(parent).data("image");
      var text = title;
      var finish_url = templates[media];

      finish_url = finish_url.replace(/{url}/g, encodeURIComponent(url));
      finish_url = finish_url.replace(/{title}/g, encodeURIComponent(title));
      finish_url = finish_url.replace(/{text}/g, encodeURIComponent(text));
      finish_url = finish_url.replace(/{image}/g, encodeURIComponent(image));

      if(finish_url.indexOf("http://") === -1 && finish_url.indexOf("https://") === -1) {
        return window.open(finish_url) && false;
      }

      var screen_width = screen.width;
      var screen_height = screen.height;
      var popup_width = screen_width - (screen_width * 0.2);
      var popup_height = screen_height - (screen_height * 0.2);
      var left = (screen_width / 2) - (popup_width / 2);
      var top = (screen_height / 2) - (popup_height / 2);
      var parameters = "toolbar=0,status=0,width=" + popup_width + ",height=" + popup_height + ",top=" + top + ",left=" + left;
      return window.open(finish_url, '', parameters) && false;
    }
  });
}
