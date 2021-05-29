package com.example.questions.usecases;

import com.example.questions.repo.AnswerRepository;
import com.example.questions.repo.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@Service
@Validated
public class DeleteAnswerUseCase implements Function<String, Mono<Void>> {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    public DeleteAnswerUseCase(QuestionRepository questionRepository, AnswerRepository answerRepository) {
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }

    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return answerRepository.deleteById(id)
                .switchIfEmpty(Mono.defer(() -> questionRepository.deleteById(id)))
                ;
    }
}
