import getUserId from '../utils/getUserId'

const Subscription = {
  post: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.post({
        where: {
          node: {
            published: true 
          }
        }
      }, info)
    }
  },
  myPost: {
    subscribe(parent, args, { prisma,request }, info) {
      const userId = getUserId(request)

      return prisma.subscription.post({
        where: {
          node: {
            author: {
              id: userId
            }
          }
        }
      }, info)
    }
  },
  message: {
    subscribe(parent, args, { prisma, request }, info) {
      const userId = getUserId(request)

      return prisma.subscription.message({
        where: {
          node: {
            receiver: {
              id: userId
            }
          }
        }
      }, info)
    }
  }
}

export { Subscription as default }