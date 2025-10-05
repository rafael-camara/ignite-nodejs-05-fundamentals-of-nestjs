import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationsRepository
implements NotificationsRepository {
  public items: Notification[] = []
  async findById(id: string) {
    const notification = this.items.find((item) => item.id.toString() === id)

    return notification || null
  }

  async create(notification: Notification) {
    this.items.push(notification)
  }

  async save(notification: Notification) {
    const notificationIndex = this.items.findIndex(
      (item) => item.id.toString() === notification.id.toString(),
    )

    if (notificationIndex >= 0) {
      this.items[notificationIndex] = notification
    }
  }
}
