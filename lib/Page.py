import wrangler.Core as wrangler
from slugify import slugify


class Page(wrangler.Page):
    all_nodes = {}

    def get_icon(self):
        return self.data["meta"]["icon"] if "icon" in self.data["meta"] else False

    def get_hide_from_nav(self):
        return self.data["meta"]["hide_from_nav"] if "hide_from_nav" in self.data["meta"] else False

    def get_blocks(self):
        if "sections" in self.data["data"]:
            try:
                some_object_iterator = iter(self.data["data"]["sections"])
            except:
                some_object_iterator = {}

    def get_content(self):
        self.get_blocks()
        return self.data["data"]

    def get_metadata(self):

        self.data["meta"]["outline"] = "outline text"

        return self.data["meta"]

    def get_sections(self):
        if "data" in self.data:
            if "sections" in self.data["data"]:
                sections = []

                for section in self.data["data"]["sections"]:
                    s = {}

                    if "heading" in section:
                        s["heading"] = section["heading"]
                        s["slug"] = slugify(section["heading"])
                        if "theme" in section:
                            s["theme"] = section["theme"]

                        sections.append(s)

                return sections
        return ""

    def get_intro(self):
        if "data" in self.data:
            if "intro" in self.data["data"]:
                return self.data["data"]["intro"]
        return ""

    def get_properties(self):
        return {
            "title": self.get_title(),
            "description": self.get_meta_description(),
            "url": self.get_tidy_url(),
            "weight": self.get_weight(),
            "icon": self.get_icon(),
            "sections": self.get_sections(),
            "intro": self.get_intro(),
            "hide_from_nav": self.get_hide_from_nav()
        }
