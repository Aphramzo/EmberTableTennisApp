TableTennis = Ember.Application.create({});

TableTennis.store = DS.Store.create({
    revision: 12,
    adapter: DS.FixtureAdapter.create()
});


TableTennis.Router.map(function () {
    this.resource('users', function () {
        this.resource('user', { path: ':post_id' });
    });
});

TableTennis.UsersRoute = Ember.Route.extend({
    model: function () {
        return TableTennis.User.find();
    }
});

TableTennis.User = DS.Model.extend({
    name: DS.attr('string'),
    games: DS.hasMany('TableTennis.Game')
});

TableTennis.Game = DS.Model.extend({
    user: DS.belongsTo('TableTennis.User')
});

TableTennis.UserController = Ember.ObjectController.extend({
    addGame: function () {
        
    }
});



TableTennis.User.FIXTURES = [{
    id: 1,
    name: 'Tyler'
}, {
    id: 2,
    name: 'Eric'
}, {
    id: 3,
    name: 'Gibbs'
}, {
    id: 4,
    name: 'Malinda'
}];

TableTennis.Game.FIXTURES = [{
   id:1,
   user: TableTennis.User.find(1)
}, {
    id: 2,
    user: TableTennis.User.find(3)
}];

TableTennis.User.find(1).get('games').pushObject(TableTennis.Game.find(1));