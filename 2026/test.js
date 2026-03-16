isCapReached(userId)
{
    var value = redis.get(`user:${userId}:notif`)
    if (value > CAP)
        return true;

    redis.incr('user:' + userId + ':notif')
    redis.expire('user:' + userId + ':notif', 86400)
    return false;
}