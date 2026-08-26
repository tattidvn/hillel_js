"use strict";

var $addTodoBtn = $('.form__btn');
var $addTodoInput = $('.form__input');
var $tasksListContainer = $('.js--todos-wrapper');
var todos = JSON.parse(localStorage.getItem('todosList')) || [];
var createLi = function createLi() {
  return $('<li>').addClass('todo-item');
};
var createTodo = function createTodo(text) {
  return $('<span>').addClass('todo-item__description').text(text);
};
var createBtnDel = function createBtnDel() {
  return $('<button>').addClass('todo-item__delete').text('Видалити');
};
var createBtnLook = function createBtnLook() {
  return $('<button>').attr({
    type: 'button',
    'data-bs-toggle': 'modal',
    'data-bs-target': '#exampleModal'
  }).addClass('btn btn-primary todo-item__look').text('Подивитись');
};
var createCheckbox = function createCheckbox() {
  return $('<input>').attr('type', 'checkbox');
};
var renderTodo = function renderTodo(itemTodo) {
  var $li = createLi();
  var $span = createTodo(itemTodo.text);
  var $checkbox = createCheckbox();
  var $button = createBtnDel();
  var $buttonLook = createBtnLook();
  $checkbox.prop('checked', itemTodo.status);
  if (itemTodo.status) {
    $span.addClass('todo-item--checked');
  }
  $li.attr('data-id', itemTodo.id);
  $li.append($checkbox, $span, $buttonLook, $button);
  $tasksListContainer.append($li);
};
var addNewTodo = function addNewTodo(e) {
  e.preventDefault();
  var todoText = $addTodoInput.val();
  var todo = {
    id: Date.now(),
    text: todoText,
    status: false
  };
  todos.push(todo);
  renderTodo(todo);
  localStorage.setItem('todosList', JSON.stringify(todos));
  $addTodoInput.val('');
};
var lookTodoBtn = function lookTodoBtn(e) {
  var $button = $(e.target);
  if ($button.hasClass('todo-item__look')) {
    var $li = $button.closest('li');
    var todoText = $li.find('span').text();
    $('.textInModal').text(todoText);
  }
};
var delTodoBtn = function delTodoBtn(e) {
  var $delBtn = $(e.target);
  if ($delBtn.hasClass('todo-item__delete')) {
    var $li = $delBtn.closest('li');
    var todoId = Number($li.attr('data-id'));
    todos = todos.filter(function (item) {
      return item.id !== todoId;
    });
    $li.remove();
    localStorage.setItem('todosList', JSON.stringify(todos));
  }
};
var changeStatus = function changeStatus(e) {
  if (e.target.type === 'checkbox') {
    var $checkbox = $(e.target);
    var $li = $checkbox.closest('li');
    var todoId = Number($li.attr('data-id'));
    var $todoText = $li.find('span');
    $todoText.toggleClass('todo-item--checked', $checkbox.prop('checked'));
    var todo = todos.find(function (item) {
      return item.id === todoId;
    });
    todo.status = $checkbox.prop('checked');
    localStorage.setItem('todosList', JSON.stringify(todos));
  }
};
todos.forEach(function (item) {
  renderTodo(item);
});
$addTodoBtn.on('click', addNewTodo);
$tasksListContainer.on('click', '.todo-item__delete', delTodoBtn);
$tasksListContainer.on('click', '.todo-item__look', lookTodoBtn);
$tasksListContainer.on('change', 'input[type="checkbox"]', changeStatus);