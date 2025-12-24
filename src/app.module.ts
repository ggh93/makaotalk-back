import { BoardService } from './Board/board.service';
import { BoardController } from './Board/board.controllers';
import { BoardModule } from './Board/board.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BoardController, AppController],
  providers: [BoardService, BoardModule, AppService],
})
export class AppModule {}
