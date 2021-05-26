package com.example.questions.repo;

import com.example.questions.collections.Answer;
import com.example.questions.model.QuestionDTO;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@Repository
public interface AnswerRepository extends ReactiveCrudRepository<Answer, String> {
    Flux<Answer> findAllByQuestionId(String id);
    //@Query(value = "{'questionId': ?0}")
    Mono<Void> deleteByQuestionId(String questionId);

    Mono<QuestionDTO> findByQuestionId(String questionId);
}
