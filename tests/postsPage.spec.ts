import { expect, test } from "@playwright/test";
import {
      getAllPosts,
      getAllPostSkeletons,
      getFirstPost,
      getPostDeleteButton,
      getSearchBarInput,
      waitForPosts,
} from "@/tests/utils";

const DEFAULT_POSTS_NUMBER = 100;

test.describe("posts page", () => {
      test.beforeEach("redirect", async ({ page }) => {
            await page.goto("/posts");
      });

      test("skeletons should be visible", async ({ page }) => {
            const allPostSkeletons = await getAllPostSkeletons(page);
            expect(allPostSkeletons.length).toBe(DEFAULT_POSTS_NUMBER);
            await expect(allPostSkeletons[0]).toBeVisible();
      });

      test("posts should be visible", async ({ page }) => {
            await waitForPosts(page);
            const posts = await getAllPosts(page);
            expect(posts.length).toBe(DEFAULT_POSTS_NUMBER);
            await expect(posts[0]).toBeVisible();
      });

      test("after click on delete icon, post should disappear", async ({
            page,
      }) => {
            await waitForPosts(page);
            const firstPost = getFirstPost(page);
            await test.step("delete first card", async () => {
                  const deleteFirstCardButton = getPostDeleteButton(firstPost);
                  await deleteFirstCardButton.click();
                  await page.waitForResponse(
                        "https://jsonplaceholder.typicode.com/posts/1",
                  );
            });

            await test.step("expect first card to be absent", async () => {
                  const allPosts = await getAllPosts(page);
                  expect(allPosts.length).toBe(99);
            });
      });

      test("filter by search query should work", async ({ page }) => {
            await waitForPosts(page);
            const searchBarInput = getSearchBarInput(page);

            await test.step("Type in some phase", async () => {
                  await searchBarInput.focus();
                  await searchBarInput.fill("fa");
                  await page.waitForTimeout(200);
            });

            await test.step("expect to see fewer cards on page", async () => {
                  const posts = await getAllPosts(page);
                  expect(posts.length).toBeLessThan(100);
            });
      });
});
