package com.example.demo.dto;

import com.example.demo.entity.Priority;
import com.example.demo.entity.Status;
import lombok.Data;
import java.time.LocalDate;

@Data
public class TaskDTO {
    private String title;
    private String description;
    private LocalDate dueDate;
    private Priority priority;
    private Status status;
}
