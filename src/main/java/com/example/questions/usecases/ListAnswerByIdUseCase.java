package com.example.questions.usecases;

import com.example.questions.model.AnswerDTO;
import com.example.questions.model.QuestionDTO;
import com.example.questions.repo.AnswerRepository;
import com.example.questions.repo.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@Service
@Validated
public class ListAnswerByIdUseCase implements Function<String, Flux<AnswerDTO>> {
    private final AnswerRepository answerRepository;
    private final MapperUtils mapperUtils;

    public ListAnswerByIdUseCase(MapperUtils mapperUtils, AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
        this.mapperUtils = mapperUtils;
    }


    @Override
    public Flux<AnswerDTO> apply(String userId) {
        return answerRepository.findByUserId(userId)
                .map(mapperUtils.mapEntityToAnswer());
    }
}
