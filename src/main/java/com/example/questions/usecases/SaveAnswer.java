package com.example.questions.usecases;

import com.example.questions.model.AnswerDTO;
import com.example.questions.model.QuestionDTO;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@FunctionalInterface
public interface SaveAnswer {
    Mono<QuestionDTO> apply(@Valid AnswerDTO answerDTO);
}
