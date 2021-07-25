import { MongooseModule } from '@nestjs/mongoose';
import { TrackController } from './track.controller';
import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track, TrackSchema } from './schemas/trach.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Track.name, schema: TrackSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
