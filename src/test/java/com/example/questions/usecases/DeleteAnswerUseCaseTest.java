package com.example.questions.usecases;

import com.example.questions.model.AnswerDTO;
import com.example.questions.repo.AnswerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DeleteAnswerUseCaseTest {
    @SpyBean
    DeleteAnswerUseCase deleteAnswerUseCase;

    @MockBean
    AnswerRepository answerRepository;

    @Test
    void deleteTest(){
        var answerDTO = new AnswerDTO("01","01","u01","test");
        Mockito.when(answerRepository.deleteById(answerDTO.getId())).thenReturn(Mono.empty());
        var dataEmpty = deleteAnswerUseCase.apply(answerDTO.getId()).block();
        Assertions.assertEquals(dataEmpty,null);
    }

}