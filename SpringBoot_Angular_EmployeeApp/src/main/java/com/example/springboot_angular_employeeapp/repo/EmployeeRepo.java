package com.example.springboot_angular_employeeapp.repo;

import com.example.springboot_angular_employeeapp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
    Optional<Employee> findEmployeeById(Long id);

    void deleteEmployeeById(Long id);
}

