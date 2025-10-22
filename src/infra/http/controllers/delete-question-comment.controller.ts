import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'
import { CurrentUser } from '@/infra/auth/current-user.decorator'
import * as jwtStrategy from '@/infra/auth/jwt.strategy'
import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from '@nestjs/common'

@Controller('/questions/comments/:id')
export class DeleteQuestionCommentController {
  constructor(
    private deleteQuestionCommentUseCase: DeleteQuestionCommentUseCase,
  ) {}

  @Delete()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: jwtStrategy.UserPayload,
    @Param('id') questionCommentId: string,
  ) {
    const { sub: userId } = user

    const result = await this.deleteQuestionCommentUseCase.execute({
      questionCommentId,
      authorId: userId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
