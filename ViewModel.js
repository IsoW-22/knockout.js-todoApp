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
        let currentNumber = '';
        if(self.todos().length === 0) {
            currentNumber = '1st';
        } else if (self.todos().length === 1){
            currentNumber = '2nd';
        } else if (self.todos().length === 2){
            currentNumber = '3rd';
        }else if (self.todos().length > 2){
            currentNumber = `${self.todos().length + 1}th`;
        }
        self.todos.push(new Task({ name: `${currentNumber} task` }));
    }

    self.removeTodo = function(todo) { self.todos.remove(todo); }
}

ko.applyBindings(new appViewModel());