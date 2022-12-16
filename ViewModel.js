"use strict"

function Task(data) {
    this.name = ko.observable(data.name);
    this.isDone = ko.observable(data.isDone);
}

// Overall viewmodel for this screen, along with initial state
function appViewModel() {
    const self = this;
    self.person = ko.observable("new user");
    this.editing = ko.observable(false);
    this.edit = function() { 
        self.editing(true);
    }
    
    self.getFocus = ko.observable(false);
    
    self.todos = ko.observableArray([]);

    self.addTodo = function() {
        self.todos.push(new Task({ name: "" }));
    }

    self.removeTodo = function(todo) { self.todos.remove(todo); }
}

ko.applyBindings(new appViewModel());