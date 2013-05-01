﻿TableTennis = Ember.Application.create({});

TableTennis.store = DS.Store.create({
    revision: 12,
    adapter: DS.FixtureAdapter.create()
});


TableTennis.Router.map(function () {
    this.resource("users");
});

TableTennis.UsersRoute = Ember.Route.extend({
    model: function () {
        return TableTennis.User.find();
    }
});

TableTennis.User = DS.Model.extend({
    name: DS.attr("string")
});

TableTennis.User.FIXTURES = [{
    id: 1,
    name: "Tyler"
}, {
    id: 2,
    name: "Eric"
}, {
    id: 3,
    name: "Gibbs"
}, {
    id: 4,
    name: "Malinda"
}];