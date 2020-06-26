const queryForUser = `
query userPinned {
  user(login:"alissonperes") {
    login
    name
    email
    url
    avatarUrl
    bio
    websiteUrl
    status {
      emojiHTML
      message
    }
  }
}`;

const queryForProjects = `
query userPinned {
  user(login:"alissonperes") {
    pinnedItems(first: 6) {
      nodes {
        ... on Repository {
          name
          projectsUrl
          homepageUrl
          url
          shortDescriptionHTML
          openGraphImageUrl
          primaryLanguage {
            name
          }
        }
      }
    }
  }
}`;

export { queryForUser, queryForProjects };
