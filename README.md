# Xero CSP pattern library [![CircleCI](https://circleci.com/gh/springload/xero-style-guide.svg?style=svg)](https://circleci.com/gh/springload/xero-style-guide)

> Front-end pattern-library to support the development of the Xero CSP (Custom Success Platform) in Salesforce.

|Important links|
|---------------|
|[Zeplin files](https://app.zeplin.io/project/59b9eb846b8d915066bf17a0/dashboard)
|[Invision](https://projects.invisionapp.com/share/KTDBYDMA2#/screens)
|[CSP Current build](https://fullcopy-fullcopy.cs67.force.com/s/topiccatalog?language=en_US)

## Installation

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm), and assumes you have [Python 2.7](https://www.python.org/) available as well as `pip`.

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:springload/xero-style-guide.git
cd xero-style-guide
# Install the required Node and npm versions.
nvm install
# Install virtualenv
pip install virtualenv
# Set up the Python virtualenv.
virtualenv .venv --python=python2.7

##If you are using a Mac / Linux
# Activate the virtualenv, macOS.
source .venv/bin/activate

##If you are using Windows
# Activate the virtualenv, Windows, CMD.exe.
.venv\Scripts\activate.bat
# Activate the virtualenv, Windows, PowerShell.
.venv\Scripts\activate.ps1

# Then, install all project dependencies.
npm install
pip install -r requirements.txt
# Install the git hooks.
.githooks/deploy
```

## Working on the project

```sh
# Activate the virtualenv, macOS.
source .venv/bin/activate
# Activate the virtualenv, Windows, CMD.exe.
.venv\Scripts\activate.bat
# Activate the virtualenv, Windows, PowerShell.
.venv\Scripts\activate.ps1

# Start the development server.
npm run start

# Build the project for production.
npm run dist
```

## Documentation

### Adding a new component

The components are made up of little JSON structures which get passed through to a jinja template to render.
They can be called from either a jinja template or from the json content.

1. Create a new file inside of 'templates/component' with the component name as the file name.

This file will hold an example of the Json structure aswell as the jinja used to render the component. 
I have created a '[new-component.j2](https://github.com/springload/xero-style-guide/tree/master/templates/components/new-component.j2)' file you can use as a reference to make sure you start with everything you need

**PLEASE NOTE:** If the component is a full width block element and isn't nested inside of the content container please can you prefix the component with '-block'

**PLEASE NOTE:** If the commponent needs styling please create a new sass file inside of 'static_src/sass/components'

2. Once you have created a new component please add it to 'content/pattern-library'. Scroll down to 'components' and then add a new item to the directory array

```json
{
    "example":"component-name",
    "development":true,
    "notes":[
        "Notes about the component"
    ],
    "base":[
        {
            "type":"component-name",
            "api":true
        }
    ],
    "modifier":[
        {
            "title":"Modifier title",
            "notes":[
                "notes about the modified version"
            ],
            "data": [
                {
                    "type": "component-name",
                    "data": "modified data here"
                }
            ]
        }
    ]
},
```

3. If you want to call the component inside a jinja template you need to add it to [includes/components.j2](https://github.com/springload/xero-style-guide/blob/master/templates/includes/components.j2).

**PLEASE NOTE:** If you use a dash in the components file name you will have to use an underscore to reference it like shown above
then you can call the component in your jinja files like this: {{ components.link(api=true) }} If you want to override the dummy data just pass the variables that you want to use instead of api=true

```html
{% macro component_file_name() %}{{ _component({ 'id': 'component-file-name' }, kwargs, caller()) }}{% endmacro %}
```

Once you have added here it is ready to be called in the jinja file, like this: 

```html
 {{ components.component_file_name(api=true) }}
```

This calls the badge component and calls the dummy data that you set in step 1. If you want to call this component and set the specific data you can do it like this

```html
 {{ components.component_file_name("title"="Hello") }}
```

If you want to nest data inside of a component you can call the component like this: 

```html
 {% call components.component_file_name("title"="Hello") %}

    <p>nested components in here</p>

 {% endcall %}
```

**PLEASE NOTE:** if you have a for loop inside of the component you can't have item as the identifier. e.g

```html
 {% call components.component_file_name("title"="Hello") %}

    <!-- Do this: -->
    {% for avatar in item.avatars %}
        {{avatar}}
    {% endfor %}

    <!-- Do not do this: -->
    {% for item in item.avatars %}
        {{item}}
    {% endfor %}

 {% endcall %}
```

4. If you want to override the default data in your json files just copy the default data you set it in the json file and override the values. For example:

```html
{% set item = {
    "type": "message",
    "heading":"Warning",
    "theme":"warning",
    "data": [
        "Content goes inside this block"
    ]
} %}
```

Delete the {% set item = %} and copy the item data into your json file

```json
{
    "type": "message",
    "heading":"Warning",
    "theme":"warning",
    "data": [
        "Content goes inside this block"
    ]
}
```

If you want to render the component in the json file with dummy data, you just need to declare the component name next to "type": and set "api":"true"

```json
{
    "type": "message",
    "api":true
}
```

### Development mode

So we can keep track of what elements are up to date I have added a development badge to the components listed in the pattern library. As listed above in number 3 you will see that there is a line that says:

```json
"development":true
```

When this is on it means that this component hasn't been finished. When the component has been completed you can remove this line of code.

### Components that are out of our control

Some components we can't change the markup or add classes to. So the only thing to do is override the existing classes that are there. These will be declared in the components notes: 

### File structure

Content: holds the content of the site. This is written in json and then generated into html which then sits in the www folder
static_src: This holds all of the sites assets (fonts, images, js, sass and svg files)
templates: This is where our components and templates sit. These are written in Jijna.
www: This is the folder where everything is compiled too.

### Sass

Our sass file structure is based on [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
Do not use '&' in the SASS as it will add the parent wrapper and break things

### Content

I have ordered the pages and used the same names as the [Invision](https://projects.invisionapp.com/share/KTDBYDMA2#/screens) grid view

## Browser & device support

**Supported browser / device versions:**

| Browser | Device/OS | Version |
|---------|-----------|---------|
| Mobile Safari | iOS Phone | latest |
| Mobile Safari | iOS Tablet | latest |
| Chrome | Android | latest |
| IE | Desktop | 11 |
| Chrome | Desktop | latest |
| MS Edge | Desktop | latest |
| Firefox | Desktop | latest |
| Safari | OSX | latest |

> Those browser / device / version combinations are the ones the styleguide *is tested* on. Our development standards ensure that the components are usable on other browsers **and will work on future browsers**.
