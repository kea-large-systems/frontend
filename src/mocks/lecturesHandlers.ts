import { rest } from "msw";

export const createLectureBySubject = rest.post("/lectures", (req, res, ctx) => {
	return res(
		ctx.status(200),
		ctx.json({
			lectureId: 1,
			subjectId: req.body,
			name: "lecture_1"
		})
	);
});