from wrangler.Core import template_filter
import re

__slugify_strip_re__ = re.compile(r'[^\w\s-]')
__slugify_hyphenate_re__ = re.compile(r'[-\s]+')

@template_filter
def is_list(value):
    return isinstance(value, list)

def striphtml(data):
    p = re.compile(r'<.*?>')
    return p.sub('', data)

@template_filter
def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.

    From Django's "django/template/defaultfilters.py".
    """
    import unicodedata
    if not isinstance(value, unicode):
        value = unicode(value)

    value = striphtml(value)

    if value.startswith("[[["):
        value = get_link_text(value)

    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicode(__slugify_strip_re__.sub('', value).strip().lower())
    return __slugify_hyphenate_re__.sub('-', value)


# @template_filter
# def getApi(apiName):
#     console.log(apiName);

#     path = "./pattern-library/components/" + apiName +"/" + apiName + ".json";
#     ret = [];
#     apiData = fs.readFileSync(path, "utf8");


#     try {
#         ret = jsonlint.parse(apiData);
#     } catch(e) {
#         console.log(e);
#     }
#     if (ret.examples) {
#         ret = ret.examples;
#         return ret;
#     }

#     return false;



# def component(item):

#     if (!iterable(item)) {
#         return new nunjucks.runtime.SafeString("<p>" + item + "</p>");
#     }

#     if (item.data && !item.type) {
#         return new nunjucks.runtime.SafeString(children(item));
#     }

#     if (item.type === "text") {
#         return new nunjucks.runtime.SafeString(item.text);
#     }


#     ret = nunjucks.render("/components/" + item.type + "/" + item.type + ".j2", {
#         item: item
#     });

#     return new nunjucks.runtime.SafeString(ret);

