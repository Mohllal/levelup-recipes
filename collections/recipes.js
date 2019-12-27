import { Meteor } from 'meteor/meteor';

export default Recipes = new Mongo.Collection('recipes');

Recipes.allow({ 
    insert: function(userId, doc) { 
        return !!userId; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    }
});

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);