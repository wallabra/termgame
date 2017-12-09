// Generated by CoffeeScript 2.0.2
var CES, ComponentPool, EntityTemplate, EntityTemplateHolder;

ComponentPool = require('./components');

CES = require('ces');

module.exports.EntityTemplateHolder = EntityTemplateHolder = class EntityTemplateHolder {
    constructor(templates = {}) {
        this.template = this.template.bind(this);
        this.spawn = this.spawn.bind(this);
        this.templates = templates;
    }

    template(name, template) {
        return (template && (this.templates[name] = template)) || this.templates[name];
    }

    spawn(name, properties = {}) {
        if (!(name in this.templates)) {
            throw new Error(`Tried to spawn entity of unknown template:  '${name}'`);
        }
        return this.templates[name].spawn(properties);
    }

};

module.exports.EntityTemplate = EntityTemplate = class EntityTemplate {
    constructor(components = []) {
        this.addComponent = this.addComponent.bind(this);
        this.spawn = this.spawn.bind(this);
        this.components = components;
    }

    addComponent(component) {
        return this.components.push(component);
    }

    spawn(properties) {
        var c, e, i, len, ref;
        e = new CES.Entity();
        ref = this.components;
        for (i = 0, len = ref.length; i < len; i++) {
            c = ref[i];
            e.addComponent(new c(properties[c.name]));
        }
        return e;
    }

};