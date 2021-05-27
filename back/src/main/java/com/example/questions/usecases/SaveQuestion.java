package com.example.questions.usecases;

import com.example.questions.model.QuestionDTO;
import reactor.core.publisher.Mono;
import javax.validation.Valid;

@FunctionalInterface
public interface SaveQuestion {
    Mono<String> apply(@Valid QuestionDTO questionDTO);
}
