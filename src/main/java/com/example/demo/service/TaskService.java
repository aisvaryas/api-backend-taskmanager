package com.example.demo.service;

import com.example.demo.dto.TaskDTO;
import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id){
    return taskRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Task not found"));
}

    public Task createTask(TaskDTO dto){
        Task task=Task.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .dueDate(dto.getDueDate())
                .priority(dto.getPriority())
                .status(dto.getStatus())
                .build();
        return taskRepository.save(task);
    }

    public Task updateTask(Long id,Task updatedTask){
        Task task=taskRepository.findById(id).orElseThrow();
        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setDueDate(updatedTask.getDueDate());
        task.setPriority(updatedTask.getPriority());
        task.setStatus(updatedTask.getStatus());
        return taskRepository.save(task);
    }

    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }
}