import bson
import base62


def gen_bson_ids_from_b62_ids(base62_order_nos: list[str]):
    for order_no in base62_order_nos:
        yield (order_no, bson.ObjectId(base62.decodebytes(order_no)))


base62_order_nos = ['gYQH80lSGohLSMii']
print(list(gen_bson_ids_from_b62_ids(base62_order_nos)))


base62_order_nos = ['gYLOBvqsEKSy4QTD']
print(list(gen_bson_ids_from_b62_ids(base62_order_nos)))
