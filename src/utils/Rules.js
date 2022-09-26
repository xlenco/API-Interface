
module.exports = {
  mail: /^(\w-*\.*)+@([a-z0-9-]?)+(\.[a-z0-9]{2,5})+$/,
  site: {
    title: /<title>(.*?)<\/title>/, // 获取网站标题
    name: /name=\"description\" content=\"(.*?)\"/, // 获取网站描述
    keywords: /name=\"keywords\" content=\"(.*?)\"/, // 获取网站关键词
    /**
     * 加号‘+’:匹配前面的子表达式一次或多次
     * 星号‘*’:匹配前面的子表达式零次或多次
     *
     * (([a-zA-Z0-9])+[a-zA-Z0-9-]\.)* :匹配域名(子域名|二级、三级域名等...)昵称，并且以点‘.’结尾
     *   ([a-zA-Z0-9])+ :只能包含“大小写字母以及数字”
     *   [a-zA-Z0-9-]\. :只能包含“大小写字母以及数字并且以点‘.’结尾”
     *
     * (([a-zA-Z0-9])+[a-zA-Z0-9-]{1,63})+ :匹配域名昵称
     *   ([a-zA-Z0-9])+ :匹配域名昵称,只能包含“大小写字母以及数字”
     *   [a-zA-Z0-9-]{1,63} :匹配域名昵称，只能包含“大小写字母以及数字和减号‘-’,并且长度必须为1-63位”
     *
     * (\.[a-zA-Z]{3,5})+ :匹配域名后缀名
     *   \.[a-zA-Z]{2,5} :以点‘.’开头只能包含“大小写字母,并且长度必须为2-5位”
     *   (其实域名最大长度因该是16位,为符合大部分域名规范长度表达式调整为5位)
     *
     */
    domain: /(([a-zA-Z0-9])+[a-zA-Z0-9-]\.)*(([a-zA-Z0-9])+[a-zA-Z0-9-]{0,63})+(\.[a-zA-Z]{2,5})+$/,
    // 在domain表达式的基础上修改：前面：^http:\/\/|https:\/\/ 后面：(\/([^\/]){1,})* 其中：{1,}至少匹配1次以上 并移除$
    full_url: /^http:\/\/|https:\/\/(([a-zA-Z0-9])+[a-zA-Z0-9-]\.)*(([a-zA-Z0-9])+[a-zA-Z0-9-]{0,63})+(\.[a-zA-Z]{2,5})+(\/([^\/]){1,})*/,
    url_head: /^\/\/|http:\/\/|https:\/\//,
  },
  bing_cover:/<url>(.*?)<\/url>/,



}
