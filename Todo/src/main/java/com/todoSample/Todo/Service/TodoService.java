package com.todoSample.Todo.Service;

import com.todoSample.Todo.Model.Todo;
import com.todoSample.Todo.Reporsitory.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    // Create or update a todo
    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    // Get all todos
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    // Get a specific todo by ID
    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    // Delete a todo
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}
