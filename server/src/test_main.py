import unittest
import json
import main
main.app.testing = True

class TestApi(unittest.TestCase):
    def test_main(self):
        with main.app.test_client() as client:
            result = client.get(
                '/'
            )
            self.assertEqual(
                result.data,
                b'Sanity check!'
            )
