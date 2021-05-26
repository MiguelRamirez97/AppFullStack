package com.example.questions.usecases;

import com.example.questions.collections.Question;
import com.example.questions.model.QuestionDTO;
import com.example.questions.repo.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@Service
@Validated
public class CreateUseCase implements SaveQuestion{

    private final MapperUtils mapperUtils;
    private final QuestionRepository questionRepository;

    public CreateUseCase(MapperUtils mapperUtils1, QuestionRepository questionRepository1){
        this.mapperUtils = mapperUtils1;
        this.questionRepository = questionRepository1;
    }
    @Override
    public Mono<String> apply(@Valid QuestionDTO questionDTO) {
        return questionRepository
                .save(mapperUtils.mapperToQuestion(null).apply(questionDTO))
                .map(Question::getId);
    }
}
