"use client";

import { Divider, List, Modal, Typography } from "@mui/material";
import {
      useGetCloseCommentsModalFn,
      useSelectCommentModalInfo,
} from "@/src/features/commentsModal/utils";
import { useGetCommentsForPostQuery } from "@/src/services/postsApi";
import Box from "@mui/material/Box";

export default function CommentsModal({ postId }: { postId: number }) {
      const { isOpened } = useSelectCommentModalInfo();
      const closeModal = useGetCloseCommentsModalFn();

      const { data, isLoading, isError, error } =
            useGetCommentsForPostQuery(postId);

      if (isError) throw error;

      return (
            <Modal
                  open={isOpened}
                  onClose={closeModal}
                  className="flex justify-center items-center"
            >
                  <Box className="w-[45%] bg-white dark:bg-containerDarkMode rounded-md">
                        <Typography className="p-6 dark:text-white">
                              КОМЕНТАРІ
                        </Typography>
                        <Divider className="dark:bg-white" />
                        <List className=" flex flex-col gap-5 p-6">
                              {isLoading ? (
                                    <Typography>loading...</Typography>
                              ) : (
                                    data?.map(({ name, body }, i) => (
                                          <Box key={i}>
                                                <Typography className="dark:text-white">
                                                      {name}
                                                </Typography>
                                                <Typography
                                                      variant="subtitle2"
                                                      className="text-gray-600 dark:text-gray-400"
                                                >
                                                      {body}
                                                </Typography>
                                          </Box>
                                    ))
                              )}
                        </List>
                  </Box>
            </Modal>
      );
}
