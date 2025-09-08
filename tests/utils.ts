import { Locator, Page } from "@playwright/test";

export async function waitForPosts(page: Page) {
      await page.waitForResponse("https://jsonplaceholder.typicode.com/posts");
}

export async function getAllPosts(page: Page) {
      return await page.locator(".postCard").all();
}

export function getFirstPost(page: Page) {
      return page.locator(".postCard").first();
}

export function getSearchBarInput(page: Page) {
      return page.getByPlaceholder("Пошук за заголовком...");
}

export function getPostDeleteButton(postSelect: Locator) {
      return postSelect.locator(".test-postDeleteButton");
}

export async function getAllPostSkeletons(page: Page) {
      return page.locator(".test-postSkeleton").all();
}
